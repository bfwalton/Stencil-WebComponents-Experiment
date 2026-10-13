import { html } from 'lit-html';

export default {
  title: 'Overview/Component gallery',
  parameters: { layout: 'fullscreen' }
};

export const AllComponents = {
  render: () => html`
    <div style="max-width:950px;margin:auto;padding:50px;color:#f4f8ed;font-family:system-ui">
      <p style="color:#dcff7a;letter-spacing:.2em;font-size:12px;font-weight:700">KINETIC / WEB COMPONENTS</p>
      <h1 style="font-size:clamp(38px,6vw,72px);letter-spacing:-.06em;margin:10px 0 8px">Motion with purpose.</h1>
      <p style="color:#9bad9e;margin-bottom:40px">Four small components. One interface across Angular, React, and Vue.</p>
      <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-bottom:36px">
        <kin-button>Start session</kin-button><kin-button variant="quiet">View details</kin-button><kin-toggle checked>Ambient sound</kin-toggle>
      </div>
      <div style="display:flex;gap:22px;align-items:stretch;flex-wrap:wrap">
        <kin-card style="width:310px"><span slot="eyebrow">UP NEXT</span><span slot="title">Make space to focus</span>A quiet moment for your most important work.<span slot="footer">↗ &nbsp; Explore the moment</span></kin-card>
        <div style="display:grid;place-items:center;min-width:240px;border:1px solid #435248;border-radius:23px;background:#202c25"><kin-progress value="68"></kin-progress></div>
      </div>
    </div>
  `
};
