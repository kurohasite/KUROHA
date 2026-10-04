// Static markup for the Nav block. Behaviour lives in components/Effects.jsx.
export default function Nav() {
  return (
    <>
<nav><a href="#hero" className="logo px"><img src="/kuroha.png" alt="" />KUROHA</a>
<button id="mb" aria-label="Menu" aria-expanded="false">MENU</button>
<div className="links" id="lk"><a href="#token">TOKEN</a><a href="#about">ABOUT</a><a href="#city">CITY</a><a href="#roadmap">ROADMAP</a><a href="#lore">LORE</a><a href="#join">JOIN</a></div></nav>
    </>
  );
}
