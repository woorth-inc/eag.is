import React from 'react'
import styled from 'styled-components'
import EagisLogo from '../assets/images/eagis-logo.png'

interface Item {
    label: string
    active?: boolean
}

// const Logo = styled.img`
//     display: block;
//     margin: 0 auto;
//     width: 130px;
//     position: relative;
//     left: 15px;
// `

const Logo = styled.div`
    display: block;
    margin: 0 auto;
    width: 140px;
    height: 40px;

    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
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
    cursor: pointer;
`

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`

const items: Item[] = [
    { label: 'company' },
    { label: 'member' },
    { label: 'about', active: true},
    { label: 'twitter' },
    { label: 'discord' }
]

export default () => (
    <>
        <Container>
            <Logo src={EagisLogo} />

            <Wrapper>
                {items.map(({ label, active }: Item, key) => (
                    <HeaderItem
                        key={key}
                        active={active}
                    >
                        {label}
                    </HeaderItem>
                ))}
            </Wrapper>
        </Container>
    </>
)
