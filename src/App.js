import React from 'react';
import Comp1 from './Components/Comp1';
import { Provider } from 'react-redux'
import Store from './reduxDir/Store'
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';
import Comp4 from './Components/Comp4';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <Comp1 />
        <Comp2 name='Akbar'/>
        <Comp3 /> */}
        <Comp4 />
      </div>
    </Provider>
  );
}

export default App;
