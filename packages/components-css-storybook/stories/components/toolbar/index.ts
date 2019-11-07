import { storiesOf } from '@storybook/html';

storiesOf('Components|Toolbar', module)
  .add('Base', () => (`
    <div class="toolbar toolbar--box-shadow py-3">
      <h5 class="h5 mb-0">Toolbar</h5>
    </div>
  `))
  .add('Center', () => (`
    <div class="toolbar toolbar--box-shadow py-3">
      <div class="toolbar__section toolbar__section--centered">
        <h5 class="h5 mb-0">Toolbar</h5>
      </div>
    </div>
  `))
  // .add('Sections', () => (`
  //   <div class="toolbar toolbar--box-shadow py-3">
  //   <div class="toolbar__left-section">
  //     <a class="button primary mx-3">Button</a>
  //   </div>
  //     <div class="toolbar__left-section">
  //       <strong class="mx-3">Toolbar</strong>
  //     </div>
  //     <div class="toolbar__right-section">
  //       <a class="button primary mx-3">Button</a>
  //     </div>
  //   </div>
  // `))

  .add('Sections', () => (`
    <div class="toolbar toolbar--box-shadow py-3">
      <div class="toolbar__section toolbar__section--fill">
        <h5 class="h5 mb-0">Toolbar</h5>
      </div>
      <div class="toolbar__section">
        <a class="button primary">Button</a>
      </div>
    </div>
  `))
  .add('Orientation', () => (`
    <div class="panel pa-0 mb-5">
      <div class="toolbar toolbar--border py-3">
        <h5 class="h5 mb-0">Top</h5>
      </div>
      <div class="pa-3">
        Hello World
      </div>
    </div>

    <div class="panel pa-0">
      <div class="pa-3">
        Hello World
      </div>
      <div class="toolbar toolbar--border toolbar--bottom py-3">
        <h5 class="h5 mb-0">Bottom</h5>
      </div>
    </div>
  `))