import { storiesOf } from '@storybook/html';

storiesOf('Components|List', module)
  .add('Base', () => (`
    <ul class="list">
      <li class="list__item">Hello</li>
      <li class="list__item">World</li>
    </ul>
  `))
  .add('Divider', () => (`
    <ul class="list list--divider">
      <li class="list__item">Hello</li>
      <li class="list__item">World</li>
    </ul>
  `))
  .add('Anchor', () => (`
    <ul class="callout list list--divider">
      <li class="list__item">
        <a href="#" class="list__anchor">Hello</a>
      </li>
      <li class="list__item">
        <a href="#" class="list__anchor">World</a>
      </li>
    </ul>
  `))

  .add('Columns', () => (`
    <ul class="callout list list--divider">
      <li class="list__item">
        <div class="list__column list__column--fill">
          <h4 class="h4">Title 1</h4>
          <p class="paragraph mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="list__column">
          <a class="button primary mx-3">Button</a>
        </div>
      </li>
      <li class="list__item">
        <a href="#" class="list__anchor">
          <div class="list__column">
            <h4 class="h4">Title 2</h4>
            <p class="paragraph mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </a>
      </li>
    </ul>
  `))