const FooterActions = ({ onSave, onDelete }) => (
  <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between">
    <button
      onClick={onSave}
      className="px-8 py-3 bg-slate-900 text-white font-black rounded-2xl shadow-lg hover:bg-slate-800 transition-all"
    >
      Save Collection
    </button>
    <button
      onClick={onDelete}
      className="text-red-400 text-sm font-bold hover:text-red-600 transition-colors"
    >
      Delete Collection
    </button>
  </div>
);
export default FooterActions;
