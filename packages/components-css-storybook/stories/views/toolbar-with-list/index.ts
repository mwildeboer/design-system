import { storiesOf } from '@storybook/html';

storiesOf('Views|Toolbar with list', module)
  .add('Base', () => (`
    <div class="panel pa-0">
      <div class="toolbar toolbar--border py-3">
        <div class="toolbar__section toolbar__section--fill">
          <h3 class="h3 mb-0">Toolbar</h5>
        </div>
        <div class="toolbar__section">
          <a class="button primary">Button</a>
        </div>
      </div>

      <ul class="list list--divider">
        <li class="list__item">
          <a href="#" class="list__anchor">
            <div class="list__column">
              <h4 class="h5">Title 1</h4>
              <p class="paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </a>
        </li>
        <li class="list__item">
          <a href="#" class="list__anchor">
            <div class="list__column">
            <h4 class="h5">Title 2</h4>
              <p class="paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `))