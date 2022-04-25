import React from 'react'
import styled from 'styled-components'

interface Props {
    action: (_: any) => any
    className?: string
    children: string
}

const ButtonWrapper = styled.div`
    border: solid 2px white;
    border-radius: 6px;

    background: transparent;
    color: white;

    text-align: center;
    line-height: 20px;
    height: 20px;
    padding: 10px;

    display: block;
    width: 100px;
    cursor: pointer;
    transition: 600ms;

    &:hover {
        background: white;
        color: black;
    }
`

export default ({
    action,
    className,
    children,
}: Props) => (
    <ButtonWrapper className={className} onClick={action}>
        {children}
    </ButtonWrapper>
)