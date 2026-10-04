// Static markup for the Hero block. Behaviour lives in components/Effects.jsx.
export default function Hero() {
  return (
    <>
<header id="hero" style={{"position": "relative"}}><canvas id="hc" width="320" height="180" aria-label="Pixel-art rainy Japanese night city with Kuroha standing in the street" role="img"></canvas>
<div className="hc"><h1>KUROHA</h1><div className="tag px">THE DARK SIDE OF THE CHAIN.</div><p className="quote">“Born from the shadows.<br />Built for the night.”</p></div>
<div className="hb"><div className="px" style={{"color": "var(--g)", "fontSize": "13px", "textShadow": "0 0 12px var(--g)"}}>$KURO</div>
<div className="row"><a className="btn" data-l="buy" href="#">[ BUY $KURO ]</a><a className="btn o" data-l="x" href="#">[ X / TWITTER ]</a></div>
<div className="status"><i></i><span id="st">KUROHA IS ONLINE // 02:47 AM</span></div></div></header>
    </>
  );
}
