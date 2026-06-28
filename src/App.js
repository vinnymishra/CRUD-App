import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Create from "./Create";
import Read from "./Read";
import Update from "./Update";


function App() {
  return (
<div className="container">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Create />}> </Route>
    <Route exact path="/read" element={<Read />}> </Route>
    <Route path="/create" element={<Create />} />
    <Route exact path="/update/:id" element={<Update />}> </Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
