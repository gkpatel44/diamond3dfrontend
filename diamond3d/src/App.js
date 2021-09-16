import React from 'react';
import './App.css'
import InfoComponent from './components/infoComponent';
import ShareLink from './components/shareLink';
import TridiComponent from './components/tridiComponent';

const App = () => {
  return (
    <>
      <TridiComponent />
      <InfoComponent />
      <ShareLink />
    </>
  );
}
export default App;

