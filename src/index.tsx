import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
// コンポーネント
import Header from './components/header/header'
// ページ
import Home from './pages/home/home'
import Members from './pages/members/members'
import Company from './pages/company/company'
import Partners from './pages/partners/partners'
// 型定義
import type { Item } from './components/header/header'
// その他
import './style.css'

const App = () => {
    const [currentPage, setCurrentPage] = useState('home')
    const [animationHome, setAnimationHome] = useState('fadein')
    const [animationCompany, setAnimationCompany] = useState('')
    const [animationMembers, setAnimationMembers] = useState('')
    const [animationPartners, setAnimationPartners] = useState('')
    const firstRenderRef = useRef(true)

    const now = () => {
        return performance.now()
    }

    const setAnimationOfPage = (page: string, animation: string) => {
        switch (page) {
            case 'home': {
                setAnimationHome(animation)
                break
            }
            case 'members': {
                setAnimationMembers(animation)
                break
            }
            case 'company': {
                setAnimationCompany(animation)
                break
            }
            case 'partners': {
                setAnimationPartners(animation)
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
        { delay: 3, label: 'company' },
        { delay: 2, label: 'members' },
        { delay: 1, label: 'home', active: true },
        { delay: 2, label: 'partners' },
        { delay: 3, label: 'pages' }
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
            <Company firstRender={firstRenderRef.current} animation={animationCompany} />
            <Members firstRender={firstRenderRef.current} animation={animationMembers} />
            <Partners firstRender={firstRenderRef.current} animation={animationPartners} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
