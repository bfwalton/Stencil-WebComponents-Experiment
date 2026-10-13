# Kinetic: web components across frameworks

A small research prototype with one Stencil custom-elements npm package, a Storybook component gallery, and examples for Angular, React, and Vue. All three apps consume the same compiled package directly, without framework wrappers.

## Run it

Use Node 22.22.3+ (or a compatible Node 24/26 release), then install once at the repository root:

```bash
npm install
npm run storybook        # http://localhost:6006
npm run dev:react        # http://localhost:5173
npm run dev:vue          # http://localhost:5174
npm run dev:angular      # http://localhost:4200
```

`npm run build:components` compiles the Stencil library. The dev and Storybook commands build it first. `npm run build` builds the library, three apps, and Storybook. `npm pack -w @webcomp/motion` builds and packs the compiled custom elements for inspection. Publishing requires changing the demo package name to a scope you control and running `npm publish -w @webcomp/motion --access public`.

## Layout

| Path | Purpose |
| --- | --- |
| `packages/motion` | Stencil source, compiled npm package, Storybook stories, and component API |
| `apps/react` | React 19 integration using DOM event listeners |
| `apps/vue` | Vue 3 integration using custom element compiler configuration |
| `apps/angular` | Angular 22 integration using `CUSTOM_ELEMENTS_SCHEMA` |
| `apps/demo.css` | Shared styling for the three sample apps |
| `docs/research.md` | Approach, integration notes, and tradeoffs |

The example apps deliberately keep their own state: pressing **Add progress** changes the progress ring, **Reset day** clears it, and the toggle updates ambient mode. That demonstrates attributes/properties and native `CustomEvent` handling in each framework.
