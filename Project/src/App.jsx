import React from 'react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Content from './Content/Content'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
