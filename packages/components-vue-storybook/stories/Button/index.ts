import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { Button } from "@components/vue";

Vue.component("v-button", Button);

storiesOf('Button', module)
  .add('Base', () => ({
    template: `<v-button>Button</v-button>`
  }))
  .add('Variant', () => ({
    template: `
      <div>
        <v-button variant="primary">Primary</v-button>
        <v-button variant="secondary">Secondary</v-button>
        <v-button variant="success">Success</v-button>
        <v-button variant="danger">Danger</v-button>
      </div>
    `
  }))
  .add('Size', () => ({
    template: `
      <div>
        <v-button size="small">Small</v-button>
        <v-button>Regular</v-button>
        <v-button size="large">Large</v-button>
      </div>
    `
  }))