import { configure } from '@storybook/html';
import '../css/index.scss'

configure(require.context('../stories', true, /\.ts$/), module);