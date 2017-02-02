import React from 'react';
import ReactDOM from 'react-dom';

// components
import Form from './components/main_form.jsx'

// render root React component on DOM loaded
document.addEventListener("DOMContentLoaded", () => {

  // set users token value from window variable
  let userToken = window.token;

  ReactDOM.render(<Form token={userToken}/>, document.getElementById("root"));

})