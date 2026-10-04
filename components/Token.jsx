// Static markup for the Token block. Behaviour lives in components/Effects.jsx.
export default function Token() {
  return (
    <>
<section id="token"><div className="panel rv"><h2 className="sec-t" style={{"marginBottom": "6px"}}>$KURO</h2><div className="px" style={{"fontSize": "10px", "color": "#9db4a8"}}>THE TOKEN OF THE NIGHT</div>
<div style={{"marginTop": "26px", "font": "10px 'Press Start 2P',monospace", "color": "#7d9b8c"}}>CONTRACT ADDRESS</div>
<div className="addr" id="ca">0x....................................</div>
<button className="btn" id="cp">[ COPY CONTRACT ]</button>
<div className="cards"><div className="card"><small>NAME</small><b>KUROHA</b></div><div className="card"><small>TICKER</small><b>$KURO</b></div><div className="card"><small>CHAIN</small><b id="chain">[CHAIN]</b></div><div className="card"><small>SUPPLY</small><b id="sup">[SUPPLY]</b></div><div className="card"><small>STATUS</small><b style={{"color": "var(--o)", "textShadow": "0 0 10px var(--o)"}}>● SOON</b></div></div></div></section>
    </>
  );
}
