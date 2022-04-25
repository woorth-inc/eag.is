import React, { useState, useEffect, useRef } from 'react'
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
    const [animationPages, setAnimationPages] = useState('')

    const refs = Array(5).fill(null).map(_ => useRef<HTMLDivElement | null>(null))

    // レスポンシブ用に画面サイズを判定する
    // const [isTablet, setIsTablet] = useState(window.innerWidth <= 1100)
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 650)
    const isTablet = useMediaQuery({ query: '(max-width: 1100px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' })
    const [goHomeFlag, setGoHomeFlag] = useState(true)

    // １回目のレンダリングかどうかを判定する
    const firstRenderRef = useRef(true)

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
                setAnimationPages(animation)
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

    const handleWindowResize = () => {
        // home以外のページを開いた状態でリサイズした際はhomeに強制移動
        if (isTablet) {
            if (goHomeFlag && currentPage !== 'home') {
                handlePageTransition('home')
            }
        } else {
            if (!goHomeFlag) {
                refs[2].current?.setAttribute('ignore-animation', 'true')
                refs[2].current?.click()
            }
        }

        setGoHomeFlag(!isTablet)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    })

    return (
        <>
            <Header
                refs={refs}
                items={items}
                media={{ isTablet, isMobile }}
            />

            {[
                [Home, animationHome],
                [Partners, animationPartners],
                [Members, animationMembers],
                [Company, animationCompany],
                [Pages, animationPages],
            ].map(([Component, animation]: [any, string], id: number) => (
                <Component
                    firstRender={firstRenderRef.current}
                    media={{ isTablet, isMobile }}
                    animation={animation}
                    key={id}
                />
            ))}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
