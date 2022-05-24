/* eslint-disable */
import BaseCodeEditor from '../editors/baseCodeEditor.js';

class controllerCss {
  constructor(id, modules) {
    this.id = id;
    this.modules = modules;
    this.elements = {};

    const value = `/* Some example CSS */

@import url("something.css");

body {
  margin: 0;
  padding: 3em 6em;
  font-family: tahoma, arial, sans-serif;
  color: #000;
}

#navigation a {
  font-weight: bold;
  text-decoration: none !important;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.7em;
}

h1:before, h2:before {
  content: "::";
}

code {
  font-family: courier, monospace;
  font-size: 80%;
  color: #418A8A;
}
`;

    this.codeEditor = new BaseCodeEditor(id, modules, {
      mode: 'text/css',
      value: '',
    });
  }
}

export default controllerCss;