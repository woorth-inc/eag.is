import React from 'react'
import styled from 'styled-components'

import Microsoft from '../../assets/images/partners-logo/microsoft.png'
import MicrosoftAzure from '../../assets/images/partners-logo/microsoft_azure.png'
import VeryLongAnimals from '../../assets/images/partners-logo/verylonganimals.png'

import './style.css'

interface Props {
    animation: string
    firstRender: boolean
    isMobile: boolean
}

const PartnersaContainer = styled.div`
    font-size: 24px;
    text-align: center;

    position: absolute;
    left: 50%;

    ${({ isMobile }) => {
        return isMobile ? `
            transform: translateX(-50%);
        ` : `
            top: 50%;
            transform: translate(-50%, -50%);
        `
    }}

    opacity: ${({ animation, isMobile }) => isMobile ? 1 : animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender, isMobile }) => isMobile || firstRender ? '' : `animation: ${animation}-company 800ms ease 50ms forwards;`}
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
    isMobile,
}: Props) => (
    <PartnersaContainer
        animation={animation}
        firstRender={firstRender}
        isMobile={isMobile}
    >
        {
            isMobile && (
                <div
                    style={{
                        marginBottom: '20px',
                        fontFamily: '"Noto Sans JP"',
                        fontSize: '16px',
                    }}
                >
                    パートナー
                </div>
            )
        }

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