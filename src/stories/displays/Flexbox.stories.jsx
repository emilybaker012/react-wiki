import React from 'react';
import Flexbox from '../../displays/Flexbox';

export default {
  title: 'Display/Flexbox',
  component: Flexbox,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Flexbox {...args} />;

export const Default = Template.bind({});

