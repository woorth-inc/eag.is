import React from 'react'
import styled from 'styled-components'
import './style.css'

interface Props {
    animation: string
}

const DummyContainer = styled.div`
    font-size: 24px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-dummy`} 800ms ease 50ms forwards;
`

export default ({
    animation,
}: Props) => (
    <DummyContainer animation={animation}>
        (=^・・^=)
    </DummyContainer>
)