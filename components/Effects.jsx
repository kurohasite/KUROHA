'use client';
// Client-side behaviour: pixel scene, rain, particles, reveal, nav, copy button, city video.
// Edit site values (contract, chain, links) in lib/config.js.
import { useEffect } from 'react';
import { CONFIG } from '@/lib/config';

export default function Effects() {
  useEffect(() => {
    let alive = true;
    const off = [];
    const raf = (f) => alive && requestAnimationFrame(f);
    const on = (t, e, f) => { t.addEventListener(e, f); off.push(() => t.removeEventListener(e, f)); };
    const iv = (f, ms) => { const id = setInterval(f, ms); off.push(() => clearInterval(id)); };

const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=s=>document.querySelector(s);
$('#ca').textContent=CONFIG.contract;$('#chain').textContent=CONFIG.chain;$('#sup').textContent=CONFIG.supply;
document.querySelectorAll('[data-l]').forEach(a=>{a.href=CONFIG.links[a.dataset.l];if(CONFIG.links[a.dataset.l]!=='#'){a.target='_blank';a.rel='noopener'}});
// nav
const lk=$('#lk'),mb=$('#mb');mb.onclick=()=>{const o=lk.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'CLOSE':'MENU'};
lk.querySelectorAll('a').forEach(a=>a.onclick=()=>{lk.classList.remove('open');mb.textContent='MENU'});
// copy
$('#cp').onclick=async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText(CONFIG.contract)}catch(_){const r=document.createRange();r.selectNode($('#ca'));getSelection().removeAllRanges();getSelection().addRange(r);try{document.execCommand('copy')}catch(_){}}
b.textContent='COPIED!';b.style.transform='scale(1.06)';setTimeout(()=>{b.textContent='[ COPY CONTRACT ]';b.style.transform=''},1600)};
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
off.push(()=>io.disconnect());document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
// cursor glow
const gl=$('#glow');on(window,'pointermove',e=>{gl.style.left=e.clientX+'px';gl.style.top=e.clientY+'px'});
// city video
const cv=$('#cv'),snd=$('#snd');
if(!RM){cv.muted=true;cv.play().catch(()=>{})}
if(RM){cv.removeAttribute('autoplay');cv.pause();cv.controls=true;snd.hidden=true}
snd.onclick=()=>{cv.muted=!cv.muted;snd.textContent='SOUND: '+(cv.muted?'OFF':'ON');if(cv.paused)cv.play()};
// status clock flicker
const stEl=$('#st');if(!RM)iv(()=>{const m=Math.floor(Date.now()/60000)%13;stEl.textContent='KUROHA IS ONLINE // 02:'+String(47+m>59?47+m-60:47+m).padStart(2,'0')+(47+m>59?' AM':' AM')},5000);
// ===== pixel scene =====
const W=320,H=180,img=new Image();img.src="/kuroha.png";
const rnd=s=>{s=Math.sin(s*127.1)*43758.5;return s-Math.floor(s)};
const bl=[];for(let i=0;i<14;i++)bl.push({x:i*24-6,w:16+(rnd(i)*14|0),h:50+(rnd(i+9)*62|0)});
const R=(c,x,y,w,h,f)=>{c.fillStyle=f;c.fillRect(x|0,y|0,w|0,h|0)};
function scene(c,t,mx,walk){
 c.imageSmoothingEnabled=false;R(c,0,0,W,H,'#050608');
 for(let y=0;y<150;y+=6)R(c,0,y,W,6,y%12?'#080F1C':'#0a1528');
 for(let i=0;i<40;i++){const tw=rnd(i+t/900|0)>.3;if(tw)R(c,rnd(i)*W,rnd(i+50)*70,1,1,'#7d9bb8')}
 R(c,226,22,18,18,'#e9f1e0');R(c,229,19,12,24,'#e9f1e0');R(c,222,26,26,10,'#e9f1e0');R(c,232,26,5,5,'#c3cfc0');R(c,236,34,3,3,'#c3cfc0');
 R(c,216,12,38,38,'rgba(200,230,210,.06)');
 // skyline
 bl.forEach((b,i)=>{R(c,b.x,150-b.h,b.w,b.h,i%2?'#0b1424':'#0d192c');
  for(let wy=150-b.h+4;wy<146;wy+=5)for(let wx=b.x+3;wx<b.x+b.w-3;wx+=5){const l=rnd(b.x*13+wx*7+wy*3+Math.floor(t/2200+i))>.8;if(l)R(c,wx,wy,2,3,rnd(wx+wy)>.8?'#ff7a3c':'#bfe8d0')}});
 // ferris wheel
 const cx=62,cy=82,r=30,a0=t/6000;
 for(let a=0;a<360;a+=3){const q=a*Math.PI/180;R(c,cx+Math.cos(q)*r,cy+Math.sin(q)*r,1,1,'#2b6a4a')}
 for(let k=0;k<8;k++){const q=a0+k*Math.PI/4;for(let s=0;s<r;s+=2)R(c,cx+Math.cos(q)*s,cy+Math.sin(q)*s,1,1,'#1d4a35');
  const gx=cx+Math.cos(q)*r,gy=cy+Math.sin(q)*r;R(c,gx-2,gy,5,4,k%3?'#19ff6c':k%2?'#ff7a3c':'#e9f1ee')}
 R(c,cx-1,cy,3,70,'#16301f');R(c,cx-12,148,24,2,'#16301f');
 // coffee shop
 R(c,198,108,66,42,'#101a2c');R(c,194,104,74,6,'#1b3a2a');R(c,194,104,74,1,'#19ff6c');
 const fk=rnd(Math.floor(t/90))>.93?.45:1;
 R(c,204,120,26,20,`rgba(255,160,70,${fk})`);R(c,206,122,22,16,`rgba(255,200,120,${fk*.6})`);R(c,217,120,1,20,'#101a2c');
 R(c,238,118,16,32,'#1a2434');R(c,250,134,2,2,'#ff7a3c');
 const sg=rnd(Math.floor(t/130))>.9?.3:1;R(c,208,92,36,10,'#050608');R(c,208,92,36,1,`rgba(25,255,108,${sg})`);R(c,208,101,36,1,`rgba(25,255,108,${sg})`);
 c.fillStyle=`rgba(25,255,108,${sg})`;c.font='7px "Press Start 2P",monospace';c.fillText('COFFEE',210,100);
 R(c,200,142,60,8,'rgba(255,150,60,.10)');
 // neon vertical sign
 const ns=rnd(Math.floor(t/210)+3)>.85?.25:1;R(c,176,104,10,30,'#050608');R(c,176,104,10,1,`rgba(255,60,90,${ns})`);R(c,176,134,10,1,`rgba(255,60,90,${ns})`);
 c.fillStyle=`rgba(255,60,90,${ns})`;c.font='bold 9px sans-serif';c.fillText('夜',177,119);R(c,170,100,22,40,`rgba(255,60,90,${.05*ns})`);
 // lamps, vending
 [[122],[294]].forEach(([x])=>{R(c,x,104,2,46,'#16202e');R(c,x-4,102,10,3,'#16202e');R(c,x-5,105,12,3,'rgba(255,220,150,.9)');R(c,x-14,108,30,40,'rgba(255,200,120,.05)')});
 R(c,274,128,12,22,'#0f1b2b');R(c,276,131,8,10,'#19ff6c');R(c,276,143,8,3,'#050608');R(c,272,126,16,40,'rgba(25,255,108,.05)');
 // street
 R(c,0,150,W,30,'#06090f');R(c,0,150,W,1,'#16301f');
 for(let i=0;i<10;i++){const x=(i*53+t/38)%(W+20)-10;R(c,x,156+i*2.4,14,1,`rgba(25,255,108,${.12+.1*rnd(i)})`)}
 R(c,208,152,24,26,'rgba(255,150,60,.10)');R(c,176,152,6,26,'rgba(255,60,90,.08)');R(c,274,152,10,26,'rgba(25,255,108,.08)');
 R(c,56,152,12,28,'rgba(25,255,108,.06)');
 // fog
 for(let i=0;i<4;i++)R(c,((t/(70-i*8)+i*95)%(W+140))-140,118+i*14,140,9,'rgba(130,170,160,.05)');
 // kuroha
 const bob=RM?0:Math.round(Math.sin(t/420));
 R(c,mx-18,148,36,4,'rgba(0,0,0,.6)');R(c,mx-26,100+bob,52,52,'rgba(25,255,108,.06)');
 if(img.complete&&img.naturalWidth)c.drawImage(img,mx-22,104+bob+(walk?Math.round(Math.abs(Math.sin(t/160))*-2):0),44,44);
 // mirrored reflection
 if(img.complete&&img.naturalWidth){c.save();c.globalAlpha=.18;c.translate(0,300+bob);c.scale(1,-1);c.drawImage(img,mx-22,104,44,26);c.restore()}
 R(c,0,0,W,H,'rgba(5,6,8,.12)');
}
const hc=$('#hc').getContext('2d');
function frame(t){scene(hc,t,160,false);if(!RM)raf(frame)}
img.onload=()=>{if(RM)frame(0)};
RM?frame(0):raf(frame);
// ===== global rain =====
const rc=$('#rain'),rx=rc.getContext('2d');let drops=[];
function rs(){rc.width=innerWidth;rc.height=innerHeight;const n=Math.min(160,innerWidth/8|0);drops=Array.from({length:n},()=>({x:Math.random()*rc.width,y:Math.random()*rc.height,v:6+Math.random()*8,l:6+Math.random()*10}))}
rs();on(window,'resize',rs);
function rain(){rx.clearRect(0,0,rc.width,rc.height);rx.fillStyle='#8fd9ff';
 for(const d of drops){rx.globalAlpha=.25+d.v/30;rx.fillRect(d.x|0,d.y|0,2,d.l|0);if(!RM){d.y+=d.v;d.x-=1.2;if(d.y>rc.height||d.x<0){d.y=-12;d.x=Math.random()*rc.width+40}}}
 if(!RM)raf(rain)}rain();
// ===== join particles =====
const pc=$('#pc'),px=pc.getContext('2d');let ps=[];
function pr(){pc.width=pc.offsetWidth;pc.height=pc.offsetHeight;ps=Array.from({length:50},()=>({x:Math.random()*pc.width,y:Math.random()*pc.height,s:2+(Math.random()*3|0)*2,v:.2+Math.random()*.7,p:Math.random()*6}))}
pr();on(window,'resize',pr);
function pf(t){px.clearRect(0,0,pc.width,pc.height);for(const p of ps){px.globalAlpha=.3+.5*Math.abs(Math.sin(t/900+p.p));px.fillStyle='#19ff6c';px.shadowColor='#19ff6c';px.shadowBlur=8;px.fillRect(p.x|0,p.y|0,p.s,p.s);if(!RM){p.y-=p.v;if(p.y<-8){p.y=pc.height+4;p.x=Math.random()*pc.width}}}
 if(!RM)raf(pf)}raf(pf);

    return () => { alive = false; off.forEach((f) => f()); };
  }, []);
  return null;
}
