import React from 'react'
import styled from 'styled-components'

const MemberContainer = styled.div`
    border-radius: 6px;
    display: grid;
    grid-row-gap: 20px;
    place-items: center;
`

const Icon = styled.div`
    border-radius: 50%;
    width: 140px;
    height: 140px;
    background: #eee;
`

const Details = styled.div`
    /* someone */
`

const Name = styled.div`
    font-size: 16px;
`

const About = styled.div`
    font-size: 14px;
`

export default () => (
    <MemberContainer>
        <Icon />
        <Details>
            <Name>neko</Name>
            <About>cutest animal</About>
        </Details>
    </MemberContainer>
)