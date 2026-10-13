import { html } from 'lit-html';

export default {
  title: 'Components/Toggle',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: { label: 'Ambient sound', checked: true, disabled: false },
  render: ({ label, checked, disabled }) => html`
    <kin-toggle ?checked=${checked} ?disabled=${disabled}>${label}</kin-toggle>
  `
};

export const On = {};
export const Off = { args: { checked: false } };
export const Disabled = { args: { disabled: true } };
