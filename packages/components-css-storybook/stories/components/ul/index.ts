import { storiesOf } from '@storybook/html';

storiesOf('Components|UL', module)
  .add('Base', () => (`
    <ul class="ul">
      <li>Hello</li>
      <li>World</li>
    </ul>
  `))
  .add('Compact', () => (`
    <ul class="ul ul--compact">
      <li>Hello</li>
      <li>World</li>
    </ul>
  `))