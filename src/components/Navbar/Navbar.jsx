import { useEffect, useState } from 'react';

let links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']];

export default function Navbar() {
  // Start from whatever theme index.html already picked, so the page never flashes.
  let [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* storage can be blocked */ }
  }, [theme]);
  return <header className="header"><div className="wrap">
    <a className="brand" href="#home" aria-label="Daniya Asefa, home">Daniya Asefa</a>
    <nav className="nav" aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <div className="right">
      <button className="iconbtn" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? '☀' : '☾'}</button>
    </div>
  </div></header>;
}
