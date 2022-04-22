import React from 'react'
import styled from 'styled-components'

import Microsoft from '../../assets/images/partners-logo/microsoft.png'
import MicrosoftAzure from '../../assets/images/partners-logo/microsoft_azure.png'
import VeryLongAnimals from '../../assets/images/partners-logo/verylonganimals.png'

import './style.css'

interface Props {
    animation: string
    firstRender: boolean
}

const PartnersaContainer = styled.div`
    font-size: 24px;
    text-align: center;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender }) => firstRender ? '' : `animation: ${animation}-company 800ms ease 50ms forwards;`}
`

const BannerWrapper = styled.div`
    grid-gap: 20px;
`

const Banner = styled.img`
    height: 40px;
    margin: 10px 20px;
`

export default ({
    animation,
    firstRender,
}: Props) => (
    <PartnersaContainer
        animation={animation}
        firstRender={firstRender}
    >
        <BannerWrapper>
            {[Microsoft, MicrosoftAzure, VeryLongAnimals].map((src, id) => (
                <Banner
                    src={src}
                    key={id}
                />
            ))}
        </BannerWrapper>
    </PartnersaContainer>
)