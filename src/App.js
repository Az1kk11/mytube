import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Feed, SerachResults, VideoDetails } from './components'
import { AppContext } from './context/Context'
import './App.css'
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="box-rowter">
          <Header/>
          <Routes>
            <Route path='/' exact element={<Feed/>} />
            <Route path='/searchResult/:searchQuery' element={<SerachResults/>} />
            <Route path='/video/:id' element={<VideoDetails/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
