import React from 'react'
import styled from 'styled-components'
import Member from '../../components/member/member'
import './style.css'

interface Props {
    animation: string
    firstRender: boolean
}

const DummyContainer = styled.div`
    font-size: 24px;
    text-align: center;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 170px;

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender }) => firstRender ? '' : `animation: ${animation}-member 800ms ease 50ms forwards;`}
`

export default ({
    animation,
    firstRender,
}: Props) => (
    <DummyContainer
        animation={animation}
        firstRender={firstRender}
    >
        {['1', '2', '3'].map((_) => {
            return (
                <Member />
            )
        })}
    </DummyContainer>
)