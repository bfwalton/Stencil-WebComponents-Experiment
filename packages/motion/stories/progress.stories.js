import { html } from 'lit-html';

export default {
  title: 'Components/Progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    label: { control: 'text' }
  },
  args: { value: 68, label: 'complete' },
  render: ({ value, label }) => html`
    <kin-progress value=${value} max="100">${label}</kin-progress>
  `
};

export const InProgress = {};
export const Empty = { args: { value: 0 } };
export const Complete = { args: { value: 100 } };
