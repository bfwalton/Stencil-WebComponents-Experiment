import { html } from 'lit-html';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  args: {
    eyebrow: 'UP NEXT',
    title: 'Make space to focus',
    description: 'A quiet moment for your most important work.'
  },
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' }
  },
  render: ({ eyebrow, title, description }) => html`
    <kin-card style="width: 310px">
      <span slot="eyebrow">${eyebrow}</span>
      <span slot="title">${title}</span>
      ${description}
      <span slot="footer">↗ &nbsp; Explore the moment</span>
    </kin-card>
  `
};

export const Default = {};
