# Research: one component package for Angular, React, and Vue

## Recommendation

Publish one Stencil package using its `dist-custom-elements` output. Keep application state and routing in the host framework. Stencil gives the component authors TypeScript, JSX, generated declarations, and a small runtime while consumers still receive standard custom elements. The output target is designed for apps that already use a bundler ([Stencil custom elements docs](https://stenciljs.com/docs/custom-elements)).

The package exposes a small stable contract: string/boolean/number attributes and matching element properties, named slots, CSS custom properties for themes, and bubbling composed `CustomEvent`s. Each consumer calls Stencil's generated `defineCustomElements()` from the single package; no Angular, React, or Vue wrapper output targets are configured.

## Framework integration

| Framework | Integration shown here | Why |
| --- | --- | --- |
| Angular 22 | `CUSTOM_ELEMENTS_SCHEMA` on the standalone component; bind attributes and native events | Angular requires a schema for unknown dash named elements ([Angular API](https://angular.dev/api/core/CUSTOM_ELEMENTS_SCHEMA)). |
| React 19 | Import the package, pass primitive values, listen for custom events through refs | React recognizes dash named tags as custom elements and supports property/event interop ([React DOM reference](https://react.dev/reference/react-dom/components#custom-html-elements)); refs keep the event contract explicit. |
| Vue 3 | Configure Vite's `isCustomElement` for `kin-` tags; use `:value` and `@kin-change` | Vue documents this compiler setting and property binding behavior ([Vue guide](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)). |

Storybook's [Web Components with Vite framework](https://storybook.js.org/docs/get-started/frameworks/web-components-vite) imports the built package in its preview, just like the sample apps. The gallery has controls for component states. Stencil also documents a Storybook plugin, but using the compiled package here exercises the public consumer entry point ([Stencil Storybook guide](https://stenciljs.com/docs/storybook)).

## Tradeoffs and next steps

- Shadow DOM gives style isolation, while CSS custom properties and slots give intentional customization points. Consumer apps cannot style arbitrary internal nodes; exposed `part` names can be expanded as needed.
- Native custom elements are browser constructs. Server rendered apps will need a deliberate SSR/hydration plan; [Vue's web component guide](https://vuejs.org/guide/extras/web-components.html#web-components-vs-vue-components) details this tradeoff.
- The prototype includes reduced motion rules, native button keyboard behavior, and progress ARIA state. Before a production release, run cross browser and assistive technology checks, add form participation if needed, and establish visual regression coverage.
- Version and release the package independently from applications. Before publishing, replace the sample npm scope with an owned scope, add a license and changelog, and test the packed tarball inside each consumer build.

Current dependency choices were checked against [Stencil's publishing guide](https://stenciljs.com/docs/publishing), [Angular's version compatibility table](https://angular.dev/reference/versions), the [Storybook 10.6 release](https://storybook.js.org/releases/10.6), and the [Vite 8 release notes](https://vite.dev/blog/announcing-vite8.html) on 2026-10-13.
