import React from 'react'
import Footer from '../Homepage/Footer/Footer'
import Navigation from '../Homepage/Navigation/Navigation'
import ResultPage from './ResultPage'

const Index = () => {
  return (
    <>
    <Navigation />
    <ResultPage Firstname="Mary" />
    <Footer />
    </>
  )
}

export default Index