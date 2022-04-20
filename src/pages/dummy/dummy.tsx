import React from 'react'
import styled from 'styled-components'

interface Props {
    animation: string
    onWheel: (_: void) => void
}

const DummyContainer = styled.div`
    font-size: 24px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({ animation }) => animation === 'fadein' ? 1 : 0};
    animation: ${({ animation }) => `${animation}-dummy`} 800ms ease 50ms forwards;
`

export default ({
    animation,
    onWheel,
}: Props) => (
    <DummyContainer
        animation={animation}
        onWheel={onWheel}
    >
        (=^・・^=)
    </DummyContainer>
)