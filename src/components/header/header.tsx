import React from 'react'
import styled from 'styled-components'
import EagisLogo from '../../assets/images/eagis-logo.png'
import './style.css'

interface Item {
    label: string
    delay: number
    active?: boolean
}

const Logo = styled.div`
    margin: 0 auto;
    margin-top: 10px;

    display: block;
    width: 140px;
    height: 40px;

    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    animation: fadein-logo 800ms ease 400ms forwards;
    opacity: 0;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`

const HeaderItem = styled.div`
    font-weight: ${props => props.active ? 600: 200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${props => props.delay * 230}ms forwards;
    opacity: 0;
    cursor: pointer;
`

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`

const items: Item[] = [
    { delay: 3, label: 'company' },
    { delay: 2, label: 'member' },
    { delay: 1, label: 'about', active: true},
    { delay: 2, label: 'twitter' },
    { delay: 3, label: 'discord' }
]

export default () => (
    <>
        <Container>
            <Logo src={EagisLogo} />

            <Wrapper>
                {items.map(({ delay, label, active }: Item, key) => (
                    <HeaderItem
                        key={key}
                        delay={delay}
                        active={active}
                    >
                        {label}
                    </HeaderItem>
                ))}
            </Wrapper>
        </Container>
    </>
)
