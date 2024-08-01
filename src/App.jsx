import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Video from './pages/video/Video'
import Pictures from './pages/pictures/Pictures'
import News from './pages/news/News'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path='/video' element={<Video />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App