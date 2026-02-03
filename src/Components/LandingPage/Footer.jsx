const Footer = () => (
  <footer className="px-8 py-10 border-t border-slate-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
        © 2026 Task Labs
      </p>
      <div className="flex gap-8 text-sm font-bold text-slate-400">
        {["Twitter", "GitHub", "Terms"].map((link) => (
          <span
            key={link}
            className="hover:text-slate-900 cursor-pointer transition-colors"
          >
            {link}
          </span>
        ))}
      </div>
    </div>
  </footer>
);
export default Footer;
