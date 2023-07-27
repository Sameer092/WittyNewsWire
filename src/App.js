import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country="us" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="business" country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" country="us" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country="us" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science" country="us" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports" country="us" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country="us" category="technology" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}



