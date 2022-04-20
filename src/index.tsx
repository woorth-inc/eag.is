import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header'
import About from './pages/about/about'
import Dummy from './pages/dummy/dummy'
import './style.css'

const now = () => performance.now()

const App = () => {
    const [animationAbout, setAnimationAbout] = useState('fadein')
    const [animationDummy, setAnimationDummy] = useState('fadeout')
    const [cooldown, setCooldown] = useState(now() + 1500)
    const firstRenderRef = useRef(true)

    const handleWheel = (component) => {
        if (now() - cooldown < 1500) return
        if (firstRenderRef.current) firstRenderRef.current = false
        setCooldown(now())

        switch (component) {
            case 'about': {
                setAnimationAbout('fadeout')
                setAnimationDummy('fadein')
                break
            }
            case 'dummy': {
                setAnimationAbout('fadein')
                setAnimationDummy('fadeout')
                break
            }
        }
    }

    return (
        <>
            <Header />
            <About firstRender={firstRenderRef.current} animation={animationAbout} onWheel={() => handleWheel('about')} />
            <Dummy animation={animationDummy} onWheel={() => handleWheel('dummy')} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
