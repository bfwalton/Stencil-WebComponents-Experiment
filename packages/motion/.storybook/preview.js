import { defineCustomElements } from '@webcomp/motion';
import './preview.css';

defineCustomElements();

export default {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'forest',
      values: [{ name: 'forest', value: '#111b16' }, { name: 'light', value: '#f0f3e9' }]
    }
  }
};
