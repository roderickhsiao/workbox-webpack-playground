require('babel-polyfill');

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

const newDiv = document.createElement('div');
// and give it some content
const newContent = document.createTextNode('Playgroud for workbox');
newDiv.appendChild(newContent);

document.body.appendChild(newDiv);
