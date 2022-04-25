import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useMediaQuery } from 'react-responsive'
// コンポーネント
import Header from './components/header/header'
// ページ
import Home from './pages/home/home'
import Members from './pages/members/members'
import Company from './pages/company/company'
import Partners from './pages/partners/partners'
import Pages from './pages/pages/pages'
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
    const [animationPages, setANimationPages] = useState('')
    const firstRenderRef = useRef(true)

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' })

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
            case 'pages': {
                setANimationPages(animation)
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
            <Header
                items={items}
                isMobile={isTabletOrMobile}
            />

            {[
                [Home, animationHome],
                [Partners, animationPartners],
                [Members, animationMembers],
                [Company, animationCompany],
                [Pages, animationPages]
            ].map(([Component, animation]: [any, string]) => (
                <Component
                    firstRender={firstRenderRef.current}
                    isMobile={isTabletOrMobile}
                    animation={animation}
                />
            ))}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
