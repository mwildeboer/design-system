import { storiesOf } from '@storybook/html';

storiesOf('Components|Button', module)
  .add('Base', () => (`
    <a class="button">Button</a>
  `))
  .add('Variant', () => (`
    <a class="button button--primary">Primary</a>
    <a class="button button--secondary">Secondary</a>
    <a class="button button--success">Success</a>
    <a class="button button--danger">Danger</a>
  `))
  .add('Size', () => (`
    <a class="button button--small">Small</a>
    <a class="button">Regular</a>
    <a class="button button--large">Large</a>
  `))