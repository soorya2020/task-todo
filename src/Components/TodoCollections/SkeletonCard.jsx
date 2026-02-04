//Skeleton loading element
const SkeletonCard = () => {
  return (
    <div className="h-64 bg-white border border-slate-200 rounded-2xl p-8 shadow-md animate-pulse">
      {/* Status Badge Skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 w-16 bg-slate-100 rounded-full"></div>
        <div className="w-2 h-2 rounded-full bg-slate-100"></div>
      </div>

      {/* Title Skeletons */}
      <div className="space-y-3">
        <div className="h-5 w-3/4 bg-slate-100 rounded-lg"></div>
        <div className="h-5 w-1/2 bg-slate-100 rounded-lg"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="mt-20 pt-4 border-t border-slate-50 flex justify-between items-center">
        <div className="h-3 w-12 bg-slate-50 rounded"></div>
        <div className="h-3 w-16 bg-slate-50 rounded"></div>
      </div>
    </div>
  );
};
export default SkeletonCard