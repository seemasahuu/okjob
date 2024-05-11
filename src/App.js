 import './App.css';
 import Jobhome from './Jobhome'
 import Form from './Form'
 import Jobdesc from './Jobdesc'
 import PostJob from './PostJob'
 import Succesapply from './Succesapply';
 import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div> 
        
        <Routes>
        <Route path="/" element={<Jobhome/>} />
        <Route path="/apply/:id" element={<Form/>} />
        <Route path="/job/:id" element={<Jobdesc/>} />
        <Route path="/job/create/new" element={<PostJob/>} />
        <Route path="/job/apply/:id/success" element={<Succesapply/>} />
      </Routes> 
      </div>
    </div>
  );
}

export default App;
