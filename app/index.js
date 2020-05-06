import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';

// Component
// State
// Lifecycle - fetching, event when added to DOM
// UI

// This is how we define a component
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    );
    /*
    SAME AS
    React.createElement('div', null, 'Hello World!');
    */
  }
}

// This is how we use a component
ReactDOM.render(
  // React.Element,
  // Where to render the element to
  <App />,
  document.getElementById('app')
);
