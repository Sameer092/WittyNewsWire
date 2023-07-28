import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App=()=>{
  let pageSize = 15
  
  const toggleModefunc = () => {
    if (darkMode === 'light') {
      darkModefunc('dark')
      // dModefunc('black')
      document.body.style.backgroundColor = 'black'
      // showAlert("Dark mode has been enabled", "success")
    }
    else {
      darkModefunc('light')
      // dModefunc('white')
      document.body.style.backgroundColor = 'white'
      // showAlert("Light mode has been enabled", "success")
    }
  }

  const [progress,setProgress]=useState(0)
  const [darkMode, darkModefunc] = useState('light')

    return (
      <BrowserRouter>
        <div>
          <Navbar mode={darkMode} toggleMode={toggleModefunc}/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="general" country="us" category="general" />}></Route>
            <Route exact path="/business" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="business" country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="entertainment" country="us" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="general" country="us" category="general" />}></Route>
            <Route exact path="/health" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="health" country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="science" country="us" category="science" />}></Route>
            <Route exact path="/sports" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="sports" country="us" category="sports" />}></Route>
            <Route exact path="/technology" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="technology" country="us" category="technology" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )

}



export default App



