import { html } from 'lit-html';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Default slot label' },
    variant: { control: 'select', options: ['primary', 'quiet'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: { label: 'Start session', variant: 'primary', loading: false, disabled: false },
  render: ({ label, variant, loading, disabled }) => html`
    <kin-button variant=${variant} ?loading=${loading} ?disabled=${disabled}>${label}</kin-button>
  `
};

export const Primary = {};
export const Quiet = { args: { variant: 'quiet', label: 'Maybe later' } };
export const Loading = { args: { loading: true, label: 'Saving session' } };
export const Disabled = { args: { disabled: true } };
