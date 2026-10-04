// Static markup for the City block. Behaviour lives in components/Effects.jsx.
export default function City() {
  return (
    <>
<section id="city"><h2 className="sec-t rv">KUROHA CITY</h2><div className="box rv"><video id="cv" src="/city.mp4" autoPlay muted loop playsInline preload="auto" aria-label="Kuroha walking through the rainy pixel-art night city"></video>
<button className="btn o" id="snd" type="button" style={{"position": "absolute", "right": "12px", "bottom": "14px", "padding": "12px 14px", "fontSize": "9px", "background": "rgba(5,6,8,.75)"}}>SOUND: OFF</button></div></section>
    </>
  );
}
