import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from '../src/components/TimePicker';
import LayoutDecorator from './decorator/LayoutDecorator';

storiesOf('TimePicker', module)
  .addDecorator(LayoutDecorator)
  .add('default', () => <TimePicker />);