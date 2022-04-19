import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header'
import About from './pages/about/about'

const App = () => (
    <>
        <Header />
        <About />
    </>
)

ReactDOM.render(<App />, document.getElementById('app'))
