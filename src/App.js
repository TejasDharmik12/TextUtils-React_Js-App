import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  // remove classes as by changing the color it must change by others
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    // 
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1f1f57';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'TextUtils - change';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light mode';
      //changes the title of the page
    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>

          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
