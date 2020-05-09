import React from 'react';

function App() {
  const greeting = 'Hi!!!';
  const dom = <h1 className="foo">{greeting}</h1>;
  return (
      <React.Fragment>
        <label htmlFor="bar">Bar</label>
        <input id="bar" type="text" onChange={() => {console.log('changed')}}/>
      </React.Fragment>
  );
}

export default App;
