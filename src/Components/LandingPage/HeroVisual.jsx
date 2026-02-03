const HeroVisual = () => (
  <div className="flex-1 relative w-full max-w-xl">
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-3xl blur-[80px] opacity-20 -z-10 animate-pulse"></div>
    
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="space-y-4">
        {[
          { color: "slate", w: "3/4", checked: false },
          { color: "blue", w: "full", checked: true },
          { color: "slate", w: "2/3", checked: false }
        ].map((item, i) => (
          <div key={i} className={`h-10 w-${item.w} ${item.checked ? 'bg-blue-50/50 border border-blue-100' : 'bg-slate-50'} rounded-lg flex items-center px-4`}>
            <div className={`w-4 h-4 rounded-md mr-3 ${item.checked ? 'bg-blue-500' : 'border-2 border-slate-200'}`}></div>
            <div className={`h-2 w-24 rounded ${item.checked ? 'bg-blue-200' : 'bg-slate-200'}`}></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default HeroVisual