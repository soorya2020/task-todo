import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewTaskCard from "./NewTaskCard";
import TodoPreviewCard from "./TodoPreviewCard";
import ErrorState from "../ErrorState";
import SetupLoadingScreen from "./SetupLoadingScreen";
import Loading from "../Loading";
import SkeletonCard from "./SkeletonCard";
import { useTodos } from "../../context/TodoContext";
import { API } from "../../../utils/axios";
import { delay } from "../../helpers";
import {
  DEFAULT_TODO_COLLECTIONS,
  TODO_PREPARING_DELAY,
} from "../../constants";

const TodoCollections = () => {
  const navigate = useNavigate();
  const { collections, setCollections } = useTodos();
  const [showShimmerUi, setShowShimmerUi] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSettingUp, setIsSettingUp] = useState(false); // New state for defaults
  const [error, setError] = useState(null);

  const fetchCollections = async () => {
    try {
      setShowShimmerUi(true);
      const response = await API.get("/todos/collections");
      const fetchedData = response.data.data || [];
      // If user is brand new (0 collections), create defaults

      if (fetchedData.length === 0) {
        await createDefaultCollections();
      } else {
        setCollections(fetchedData.reverse());
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load collections");
    } finally {
      setShowShimmerUi(false);
    }
  };

  const createDefaultCollections = async () => {
    setIsSettingUp(true);
    // Define the collections WITH sample tasks

    try {
      // Create all 3 in parallel
      let requests = DEFAULT_TODO_COLLECTIONS.map((item) =>
        API.post("/todos/collections", { name: item.name, todos: item.todos }),
      );
      requests = [...requests, await delay(TODO_PREPARING_DELAY)];
      await Promise.all(requests);

      // Refresh the list after creating them
      const finalResponse = await API.get("/todos/collections");
      setCollections(finalResponse.data.data.reverse());
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Could not set up default collections");
    } finally {
      setIsSettingUp(false);
    }
  };

  const handleDelete = async (collectionId) => {
    try {
      await API.delete(`/todos/collections/${collectionId}`);

      // Optional: update UI immediately (recommended)
      setCollections((prev) =>
        prev.filter((item) => item._id !== collectionId),
      );
    } catch (err) {
      setError("failed to delete collectoin");
      console.error("Failed to delete collection", err);
    }
  };

  const createNewCollectoin = async () => {
    try {
      setLoading(true);
      const response = await API.post("/todos/collections", {
        name: "Untitled ",
        todos: [],
      });
      const newCollectionId = response.data.data._id;
      setLoading(false);
      navigate("/app/todo/" + newCollectionId);
    } catch (error) {
      setError("new collection creation failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  if (loading) return <Loading text="Createing your todo list..." />;

  if (error)
    return (
      <ErrorState message={error} onRetry={() => window.location.reload()} />
    );

  if (isSettingUp) return <SetupLoadingScreen timer={TODO_PREPARING_DELAY} />; //this is for new user of user with no collections

  if (showShimmerUi) {
    return (
      <div className="p-8 bg-slate-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* We keep the NewTaskCard visible or show a skeleton for it too */}
          <div className="h-64 border-2 border-dashed border-slate-200 rounded-[2.5rem] animate-pulse" />
          {[...Array(7)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NewTaskCard onClick={() => createNewCollectoin()} />
        {collections.map((item, index) => (
          <TodoPreviewCard
            key={index}
            item={item}
            index={index}
            onClick={(id) => navigate("/app/todo/" + id)}
            onDelete={(id) => handleDelete(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoCollections;
