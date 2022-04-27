import React from 'react';
import { ComponentStory } from '@storybook/react';
import LeftToRightLogin from './LeftToRightLogin';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI components/LeftToRightLogin',
  component: LeftToRightLogin,
  argTypes: {
    source: {
      description: '图片地址的数组',
      defaultValue: {},
    },
    className: {
      description: '额外的class名',
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LeftToRightLogin> = (args) => <LeftToRightLogin {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  source :[],
  waterFallSetting:{}
};
