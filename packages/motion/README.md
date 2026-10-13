# @webcomp/motion

Four Stencil custom elements with isolated styles and built in animation. Build with `npm run build -w @webcomp/motion`, then import the package's generated registration helper. Consumers use this one package directly.

```js
import { defineCustomElements } from '@webcomp/motion';
defineCustomElements();
```

```html
<kin-button>Start session</kin-button>
<kin-toggle checked>Ambient sound</kin-toggle>
<kin-progress value="68" max="100"></kin-progress>
<kin-card>
  <span slot="eyebrow">UP NEXT</span>
  <span slot="title">Make space to focus</span>
  A quiet moment for your most important work.
  <span slot="footer">Explore ↗</span>
</kin-card>
```

| Element | Attributes / properties | Event |
| --- | --- | --- |
| `kin-button` | `variant="primary|quiet"`, `loading`, `disabled` | `kin-activate` with `{ variant }` |
| `kin-toggle` | `checked`, `disabled` | `kin-change` with `{ checked }` |
| `kin-progress` | `value` (default 0), `max` (default 100) | — |
| `kin-card` | named slots `eyebrow`, `title`, `footer` and default content | — |

Events bubble through shadow DOM (`composed: true`) and carry their data in `event.detail`. The toggle fires `kin-change` for user actions; setting `checked` programmatically only changes state. The progress ring clamps invalid values for display and exposes progress semantics through ARIA. Buttons and toggles use native buttons, including keyboard support. Animations respect `prefers-reduced-motion`.

Theme any subtree with CSS custom properties:

```css
.my-theme {
  --kin-accent: #b9a4ff;
  --kin-ink: #1c1730;
  --kin-text: #fff;
  --kin-surface: #312849;
  --kin-border: #554773;
  --kin-track: #665c79;
  --kin-muted: #c2b8d6;
  --kin-focus: #ffe28d;
}
```

The components are presentational; the sample apps own their state. The toggle is a switch, not a form associated input. For native form submission, pair it with a hidden input or extend the component with `ElementInternals` before production use. Custom elements upgrade only in the browser, so applications that depend on server rendered component content need a hydration strategy. The compiled custom-elements output uses `@stencil/core` as a runtime dependency.
