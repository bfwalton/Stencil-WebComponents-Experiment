import type { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'kinetic',
  outputTargets: [{
    type: 'dist-custom-elements',
    customElementsExportBehavior: 'bundle',
    generateTypeDeclarations: true
  }]
};
