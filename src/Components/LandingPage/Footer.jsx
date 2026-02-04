const LINKS = [
  { name: "GitHub", link: "https://github.com/soorya2020" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/soorya-krishnanunni/",
  },
  { name: "Terms", link: "" },
];
const Footer = () => (
  <footer className="px-8 py-10 border-t border-slate-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
        © 2026 Soorya Krishnanunni
      </p>
      <div className="flex gap-8 text-sm font-bold text-slate-400">
        {LINKS.map((item, index) => (
          <span
            key={index}
            className="hover:text-slate-900 cursor-pointer transition-colors"
          >
            <a href={item.link}>{item.name}</a>
          </span>
        ))}
      </div>
    </div>
  </footer>
);
export default Footer;
