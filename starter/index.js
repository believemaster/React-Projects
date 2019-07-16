import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement('div', null, 'React element!')  // react element defined

const element = <div>React element with JSX</div>   // coed will be transfered to upline code by pracel and babel in it.

ReactDOM.render(element, document.getElementById('root'));