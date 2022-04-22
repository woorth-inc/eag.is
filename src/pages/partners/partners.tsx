import React from 'react'
import styled from 'styled-components'
import './style.css'

interface Props {
    animation: string
    firstRender: boolean
}

const DummyContainer = styled.div`
    font-size: 24px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender }) => firstRender ? '' : `animation: ${animation}-company 800ms ease 50ms forwards;`}
`

export default ({
    animation,
    firstRender,
}: Props) => (
    <DummyContainer
        animation={animation}
        firstRender={firstRender}
    >
        <p>partneres</p>
        <p>(=^・・^=)</p>
    </DummyContainer>
)