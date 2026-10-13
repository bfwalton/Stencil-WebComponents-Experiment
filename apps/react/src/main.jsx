import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements } from '@webcomp/motion';
import '../../demo.css';

defineCustomElements();

function App() {
  const [progress, setProgress] = useState(68);
  const [ambient, setAmbient] = useState(true);
  const startRef = useRef(null);
  const resetRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const start = startRef.current;
    const reset = resetRef.current;
    const toggle = toggleRef.current;
    const advance = () => setProgress(value => Math.min(100, value + 8));
    const restart = () => setProgress(0);
    const change = event => setAmbient(event.detail.checked);
    start.addEventListener('kin-activate', advance);
    reset.addEventListener('kin-activate', restart);
    toggle.addEventListener('kin-change', change);
    return () => {
      start.removeEventListener('kin-activate', advance);
      reset.removeEventListener('kin-activate', restart);
      toggle.removeEventListener('kin-change', change);
    };
  }, []);

  useEffect(() => { toggleRef.current.checked = ambient; }, [ambient]);

  return <div className="app"><div className="shell">
    <header className="topbar"><div className="brand"><span className="brand-mark">✳</span>kinetic</div><div className="top-right"><span className="framework">React demo</span><span className="avatar">R</span></div></header>
    <main>
      <section className="hero"><div><span className="eyebrow">Your creative rhythm, simplified</span><h1>Find your <em>flow.</em></h1><p className="intro">A calm place to keep momentum. Small interactions help the important work feel a little lighter.</p><div className="actions"><kin-button ref={startRef}>Add progress ↗</kin-button><kin-button ref={resetRef} variant="quiet">Reset day</kin-button></div></div><div className="hero-panel"><p className="panel-kicker">Today's momentum</p><kin-progress value={progress}></kin-progress><p className="panel-caption">{progress === 100 ? 'Beautiful work. You made it.' : 'Every little step counts.'}</p></div></section>
      <section><div className="section-head"><div><span className="eyebrow">The good stuff</span><h2>On your horizon</h2></div><p className="section-note">One step at a time, one project at a time.</p></div><div className="cards">
        <kin-card><span slot="eyebrow">01 / DEEP WORK</span><span slot="title">Shape the idea</span>Give the most exciting part of the project your full attention.<span slot="footer" className="card-footer">45 minute focus block <b>↗</b></span></kin-card>
        <kin-card><span slot="eyebrow">02 / CREATIVE BREAK</span><span slot="title">Take a breath</span>A little distance can make the next direction clearer.<span slot="footer" className="card-footer">Room to recharge <b>↗</b></span></kin-card>
        <kin-card><span slot="eyebrow">03 / WRAP UP</span><span slot="title">Close the loop</span>Collect the wins and leave a clean start for tomorrow.<span slot="footer" className="card-footer">End with intention <b>↗</b></span></kin-card>
      </div></section>
      <div className="bottom-panel"><div><strong>Make room for calm</strong><p>Switch the mood while you work. This toggle reports a native custom event.</p></div><kin-toggle ref={toggleRef}>Ambient mode {ambient ? 'on' : 'off'}</kin-toggle></div>
    </main>
  </div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
