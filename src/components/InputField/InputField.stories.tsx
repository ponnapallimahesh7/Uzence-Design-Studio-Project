import React from 'react';
import { InputField } from './InputField';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import { InputFieldProps } from './InputField.types';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    variant: { control: 'radio', options: ['filled', 'outlined', 'ghost'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter username',
  helperText: 'Helper text',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Email',
  placeholder: 'Enter email',
  invalid: true,
  errorMessage: 'Invalid email',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Password',
  placeholder: 'Enter password',
  disabled: true,
};
