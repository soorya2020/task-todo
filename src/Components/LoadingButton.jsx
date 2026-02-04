import Button from "./Button";
import Loader from "./Loader";

const LoadingButton = ({
  isLoading,
  text,
  loadingText = "Loading...",
  ...props
}) => {
  return (
    <Button
      disabled={isLoading}
      className="bg-slate-900 text-white mt-2 flex items-center justify-center gap-2"
      {...props}
    >
      {isLoading ? (
        <>
          <Loader size={18} />
          <span>{loadingText}</span>
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default LoadingButton;
