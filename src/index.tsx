import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
// コンポーネント
import Header from './components/header/header'
// ページ
import Home from './pages/home/home'
import Member from './pages/member/member'
import Company from './pages/company/company'
// 型定義
import type { Item } from './components/header/header'
// その他
import './style.css'

const now = () => performance.now()

const App = () => {
    const [currentPage, setCurrentPage] = useState('home')
    const [animationHome, setAnimationHome] = useState('fadein')
    const [animationCompany, setAnimationCompany] = useState('')
    const [animationMember, setAnimationMember] = useState('')
    const firstRenderRef = useRef(true)

    const setAnimationOfPage = (page: string, animation: string) => {
        switch (page) {
            case 'home': {
                setAnimationHome(animation)
                break
            }
            case 'member': {
                setAnimationMember(animation)
                break
            }
            case 'company': {
                setAnimationCompany(animation)
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
        { delay: 2, label: 'member' },
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
            <Member firstRender={firstRenderRef.current} animation={animationMember} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
