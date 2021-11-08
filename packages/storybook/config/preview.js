import '@wesaynih.dev/design-tokens/dist/index.css';

import { defineCustomElements } from '@wesaynih.dev/web-components-stencil';

defineCustomElements();

const statuses = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  statuses,
  options: {
    panelPosition: 'bottom',
  },
};
