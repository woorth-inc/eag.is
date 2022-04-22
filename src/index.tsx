import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
// コンポーネント
import Header from './components/header/header'
import Home from './pages/home/home'
import Dummy from './pages/dummy/dummy'
// 型定義
import type { Item } from './components/header/header'
// その他
import './style.css'

const now = () => performance.now()

const App = () => {
    const [currentPage, setCurrentPage] = useState('home')

    const [animationHome, setAnimationHome] = useState('fadein')
    const [animationDummy, setAnimationDummy] = useState('fadeout')
    const [cooldown, setCooldown] = useState(now() + 1500)
    const firstRenderRef = useRef(true)

    const setAnimationOfPage = (page: string, animation: string) => {
        switch (page) {
            case 'home': {
                setAnimationHome(animation)
                break
            }
            case 'dummy': {
                setAnimationDummy(animation)
                break
            }
        }
    }

    const handlePageTransition = (nextPage: string) => {
        if (firstRenderRef.current) firstRenderRef.current = false
        setAnimationOfPage(currentPage, 'fadeout')
        setTimeout(() => {
            setAnimationOfPage(nextPage, 'fadein')
            setCurrentPage(nextPage)
        }, 700)
    }

    const items: Item[] = [
        // { delay: 3, label: 'company' },
        // { delay: 2, label: 'member' },
        { delay: 1, label: 'home', active: true },
        // { delay: 2, label: 'twitter' },
        { delay: 2, label: 'dummy' }
    ].map((params) => {
        return Object.assign(params, {
            onClick: () => {
                handlePageTransition(params.label)
            }
        })
    })

    return (
        <>
            <Header items={items} />
            <Home firstRender={firstRenderRef.current} animation={animationHome} />
            <Dummy animation={animationDummy} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
