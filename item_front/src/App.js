import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from './component/page/intro/Loading';
import Instructions from './component/page/intro/Instructions';
import Login from './component/page/join/Login';
import Join from './component/page/join/Join';
import FindId from './component/page/join/FindId';
import ResetPassword from './component/page/join/ResetPassword';
import Main_todolist from './component/page/main/Main_todolist';
import Matching from './component/page/main/Matching';


function App(props) {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element ={<Loading />}/>
      <Route path="instructions" element ={<Instructions />}/>
      <Route path="login" element ={<Login />}/>
      <Route path="join" element ={<Join />}/>
      <Route path="findid" element ={<FindId />}/>
      <Route path="reset" element ={<ResetPassword />}/>
      <Route path="main" element ={<Main_todolist />}/>
      <Route path="matching" element ={<Matching />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
