import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import 'astro-components-demo/dist/astro-web-components/astro-web-components.css'
import { defineCustomElements } from 'astro-components-demo/dist/custom-elements';
defineCustomElements();

createApp(App).mount('#app')
