import { createApp } from 'vue';
import { defineCustomElements } from '@webcomp/motion';
import '../../demo.css';
import App from './App.vue';

defineCustomElements();
createApp(App).mount('#app');
