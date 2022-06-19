import { Layout } from 'components/Layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'views/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
