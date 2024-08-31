import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './auth/sign-in';

//scss
import "./assets/scss/hope-ui.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/customizer.scss";

// Redux Selector / Action
import { useDispatch } from 'react-redux';
import { setSetting } from './store/setting/actions';
import SuperAdmin from './SuperAdmin/index';

function App({children}) {
  const dispatch = useDispatch();
  dispatch(setSetting());

  return (
    // <div className="App">
    // {/* <IndexRouters /> */}
    //  {children} 
  //  </div>
  
    <div className="App">
      {children}
    </div>
  );
}

export default App;