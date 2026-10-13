<script setup>
import { ref } from 'vue';

const progress = ref(68);
const ambient = ref(true);
const advance = () => { progress.value = Math.min(100, progress.value + 8); };
const reset = () => { progress.value = 0; };
const onAmbientChange = event => { ambient.value = event.detail.checked; };
</script>

<template>
  <div class="app"><div class="shell">
    <header class="topbar"><div class="brand"><span class="brand-mark">✳</span>kinetic</div><div class="top-right"><span class="framework">Vue demo</span><span class="avatar">V</span></div></header>
    <main>
      <section class="hero"><div><span class="eyebrow">Your creative rhythm, simplified</span><h1>Find your <em>flow.</em></h1><p class="intro">A calm place to keep momentum. Small interactions help the important work feel a little lighter.</p><div class="actions"><kin-button @kin-activate="advance">Add progress ↗</kin-button><kin-button variant="quiet" @kin-activate="reset">Reset day</kin-button></div></div><div class="hero-panel"><p class="panel-kicker">Today's momentum</p><kin-progress :value="progress"></kin-progress><p class="panel-caption">{{ progress === 100 ? 'Beautiful work. You made it.' : 'Every little step counts.' }}</p></div></section>
      <section><div class="section-head"><div><span class="eyebrow">The good stuff</span><h2>On your horizon</h2></div><p class="section-note">One step at a time, one project at a time.</p></div><div class="cards">
        <kin-card><span slot="eyebrow">01 / DEEP WORK</span><span slot="title">Shape the idea</span>Give the most exciting part of the project your full attention.<span slot="footer" class="card-footer">45 minute focus block <b>↗</b></span></kin-card>
        <kin-card><span slot="eyebrow">02 / CREATIVE BREAK</span><span slot="title">Take a breath</span>A little distance can make the next direction clearer.<span slot="footer" class="card-footer">Room to recharge <b>↗</b></span></kin-card>
        <kin-card><span slot="eyebrow">03 / WRAP UP</span><span slot="title">Close the loop</span>Collect the wins and leave a clean start for tomorrow.<span slot="footer" class="card-footer">End with intention <b>↗</b></span></kin-card>
      </div></section>
      <div class="bottom-panel"><div><strong>Make room for calm</strong><p>Switch the mood while you work. This toggle reports a native custom event.</p></div><kin-toggle :checked="ambient" @kin-change="onAmbientChange">Ambient mode {{ ambient ? 'on' : 'off' }}</kin-toggle></div>
    </main>
  </div></div>
</template>
