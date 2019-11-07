import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { H1 } from "@components/vue";

Vue.component("v-h1", H1);

storiesOf('H1', module)
  .add('Base', () => ({
    template: `<v-h1>H1</v-h1>`
  }))