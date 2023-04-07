import React from 'react';
import{BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import log from './assets/log.svg';
import {Home, CreatePost} from './pages';
import SignIn from './components/firebase/auth/SignIn';
import SignUp from './components/firebase/auth/SignUp';

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      <Link to="/">
        <img src={log} alt="logo" className="w-28 object-contain"></img>
      </Link>
      <div className="links-container">
      <div className="links-right">
       <Link to="/signin" className="font-inter font-medium  padding-right:10px text-[#6469ff] px-4 py-2 rounded-md" >SignIn</Link>
       <Link to="/signup" className="font-inter font-medium padding-right:10px text-[#6469ff] px-4 py-2 rounded-md" >SignUp</Link>
      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </div>
      </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/signup" exact element={<SignIn/>}/>
        <Route path="/signup" exact element={<SignUp/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;