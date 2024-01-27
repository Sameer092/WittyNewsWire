import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import SearchResults from './Components/SearchResults';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 15

  const toggleModefunc = () => {
    if (darkMode === 'light') {
      darkModefunc('dark')
      document.body.style.backgroundColor = 'black'
    }
    else {
      darkModefunc('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  const [progress, setProgress] = useState(0)
  const [darkMode, darkModefunc] = useState('light')

  return (
    <BrowserRouter>
      <div>
        <Navbar mode={darkMode} toggleMode={toggleModefunc} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general" />}></Route>
          <Route exact path="/search" element={<SearchResults mode={darkMode} setProgress={setProgress} pageSize={pageSize} />}  />
          <Route exact path="/business" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="business" country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="science" country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="sports" country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News mode={darkMode} setProgress={setProgress} pageSize={pageSize} key="technology" country="in" category="technology" />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )

}



export default App



