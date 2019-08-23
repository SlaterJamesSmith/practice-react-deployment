import React from 'react';
import Navbar from './Navbar';
import ContentContainer from './ContentContainer';
// import market from '../assets/images/market.jpeg';

function App(){
  // var styledBkrnd = {
  //   backgroundImage: 'url(' + market + ')',
  //   backgroundSize: 'cover',
  // };
  return (
    <div>
      <style jsx global >{`
         body {
           margin: 0;
           background-color: darkgray;
         }
       `}</style>
      <Navbar/>
      <ContentContainer/>

    </div>
  );
}

export default App;
