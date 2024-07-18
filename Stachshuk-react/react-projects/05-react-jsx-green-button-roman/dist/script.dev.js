"use strict";

var buttonText = 'Click me!';

var onButtonClick = function onButtonClick() {
  return buttonText = 'Hello from React!';
};

var App = function App() {
  return;
};

var container = document.getElementById('app');
var root = ReactDOM.createRoot(container);
root.render(App);