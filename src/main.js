import '/CSS/style.css';
import javascriptLogo from '/assets/javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Abbie!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="docs">
      sonemthing
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
