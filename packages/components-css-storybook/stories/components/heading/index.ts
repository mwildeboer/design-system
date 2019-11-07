import { storiesOf } from '@storybook/html';

storiesOf('Components|Heading', module)
  .add('All', () => (`
    <h1 class="h1">Hello World</h1>
    <p class="paragraph mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <h2 class="h2">Hello World</h2>
    <p class="paragraph mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <h3 class="h3">Hello World</h3>
    <p class="paragraph mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <h4 class="h4">Hello World</h4>
    <p class="paragraph mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <h5 class="h5">Hello World</h5>
    <p class="paragraph mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <h6 class="h6">Hello World</h6>
    <p class="paragraph mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  `))