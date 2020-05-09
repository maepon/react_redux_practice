import React from 'react';

function App() {
  return (
      <React.Fragment>
        <label htmlFor="bar">Bar</label>
        <input id="bar" type="text" onChange={() => {console.log('changed')}}/>
        <Cat/>
        <Cat/>
        <Cat/>
        <Cat/>
      </React.Fragment>
  );
}

const Cat = () => {
    return (
        <div>にゃー</div>
    )
}

export default App;
