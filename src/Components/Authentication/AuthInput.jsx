const AuthInput = ({ label, type, placeholder, onChange }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
      {label}
    </label>
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm outline-none focus:border-blue-600 focus:bg-white transition-all font-medium text-slate-900"
    />
  </div>
);
export default AuthInput;
