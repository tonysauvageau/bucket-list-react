import React from 'react';
import Nav from '../components/Nav';
import Buckets from '../components/buckets/Buckets';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Buckets /> 
        </div>
     </div>
    );
  }
}

export default App;
