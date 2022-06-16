import React from 'react'
import styled from 'styled-components'
import Card from '../../components/card/card'
import Button from '../../components/button/button'
import type { State } from '../../components/card/card'

import PopupSafe from '../../assets/images/popup/safe.png'
import PopupUnsafe from '../../assets/images/popup/unsafe.png'
import PopupUnknown from '../../assets/images/popup/unknown.png'
import PopupAllInOne from '../../assets/images/popup/all_in_one.png'

import './style.css'

interface Media {
    isMobile: boolean
    isTablet: boolean
}

interface Props {
    animation: string
    firstRender: boolean
    media: Media
}

const Container = styled.div`
    pointer-events: ${({ disableClick }) => disableClick ? 'none' : 'all'};
    display: block;

    ${({ media }) => {
        return media.isTablet ? `
            position: relative;
            bottom: 50px;
        ` : ''
    }}
`

const CardWrapper = styled.div`
    position: relative;
    height: ${({ media }) => media.isMobile ? '162px' : media.isTablet ? '135px' : '198px'};
    bottom: ${({ media }) => media.isTablet ? '21px' : '59px'};
`

const StyledCard = styled(Card)`
    position: absolute;
    transform: translateX(-50%);
    left: calc(50% + ${({ id }) => ['-300px', '0px', '300px'][id]});
    z-index: ${({ id }) => 3 - id};

    -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-card`} 800ms ease ${({ id, firstRender }) => (firstRender ? 900 : 50) + id * 120}ms forwards;
`

const CardForTablet = styled.img`
    position: absolute;
    width: 250px;

    transform: translateX(-50%);
    left: calc(50% + ${({ id }) => [-170, 0, 170][id]}px);
    z-index: calc(3 - ${({ id }) => id});

    -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-card`} 800ms ease ${({ id, firstRender }) => (firstRender ? 900 : 50) + id * 120}ms forwards;
`

const CardForMobile = styled.img`
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    width: 400px;
    top: 70px;

`

const Title = styled.p`
    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-title`} 800ms ease ${({ id, firstRender }) => (firstRender ? 900 : 50) + id * 120}ms forwards;
`

const TitleWrapper = styled.div`
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    ${({ media }) => media.isMobile ? '' : 'transform: scale(1.4, 0.7)'};

    margin: 0 auto;
    position: relative;
    top: ${({ media }) => media.isMobile ? '60px' : '30px'};

    p {
        font-style: italic;
        font-size: ${({ media }) => media.isMobile ? '35px' : media.isTablet ? '60px' : '130px'};
        margin: ${({ media }) => media.isTablet ? '-10px' : '-40px'} 0;
    }

    ${({ media }) => {
        return media.isTablet ? `
        ` : [
            {
                id: 1,
                style: `
                    height: 320px;
                    margin-top: 40px;
                    background: linear-gradient(black 0, rgba(255,255,255,0) 100%);
                `,
            },
            {
                id: 3,
                style: `
                    height: 320px;
                    margin-top: -140px;
                    background: linear-gradient(rgba(255,255,255,0) 0, black 100%);
                `,
            },
        ].map(({ id, style }) => {
            return `
                p:nth-of-type(${id}):before {
                    content: '';
                    position: absolute;
                    left: 0;

                    width: 100%;
                    z-index: 1;

                    ${style}
                }
            `
        }).join('\n')
    }}
`

const StyledButton = styled(Button)`
    width: 110px;
    margin: ${({ media }) => media.isMobile ? '20px' : '40px'} auto;
    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-button`} 800ms ease ${({ firstRender }) => firstRender ? 600 : 50}ms forwards;
    ${({ style }) => style || ''}
`

const Description = styled.div`
    margin: 0 auto;
    width: 90%;
    text-align: center;
    margin-top: ${({ media }) => media.isTablet ? '20px' : '0'};

    font-family: "Noto Sans JP";
    font-weight: 700;

    & > p {
        margin: 0;
    }

    & > p:nth-of-type(1) {
        opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
        animation: ${({ animation }) => `${animation}-description-line1`} 800ms ease ${({ firstRender }) => firstRender ? 600 : 50}ms forwards;
    }

    & > p:nth-of-type(2) {
        opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
        animation: ${({ animation }) => `${animation}-description-line2`} 800ms ease ${({ firstRender }) => firstRender ? 600 : 50}ms forwards;
    }
`

export default ({
    animation,
    firstRender,
    media,
}: Props) => {
    const handleDocsClick = () => {
        open('https://docs.eag.is/')
    }

    const handleInstallClick = () => {
        open('https://chrome.google.com/webstore/detail/eagis-web3-security-tool/ichdnpogfildckjjhdgkanoonbapoaml?hl=ja')
    }

    return (
        <Container
            media={media}
            disableClick={animation !== 'fadein'}
        >
            <TitleWrapper media={media}>
                {['Easy to get', 'Aegis with', 'Eagis'].map((text: string, id: number) => (
                    <Title
                        animation={animation}
                        firstRender={firstRender}
                        id={id}
                        key={id}
                    >
                        {text}
                    </Title>
                ))}
            </TitleWrapper>

            <CardWrapper media={media}>
                {
                    media.isMobile ? (
                        <CardForMobile
                            src={PopupAllInOne}
                            alt={'popup example'}
                        />
                    ) : media.isTablet ? (
                        [PopupSafe, PopupUnsafe, PopupUnknown].map((src, id: number) => {
                            return (
                                <CardForTablet
                                    animation={animation}
                                    firstRender={firstRender}
                                    src={src}
                                    id={id}
                                    key={id}
                                />
                            )
                        })
                    ) : (
                        ['safe', 'unsafe', 'unknown'].map((state: State, id: number) => (
                            <StyledCard
                                type={'NFT'}
                                name={'Collection Name'}
                                icon={'https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0'}
                                state={state}
                                detail={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                                animation={animation}
                                firstRender={firstRender}
                                id={id}
                                key={id}
                            />
                        ))
                    )
                }
            </CardWrapper>

            {
                media.isTablet && (
                    <Description
                        animation={animation}
                        firstRender={firstRender}
                        media={media}
                    >
                        <p>NFT真贋鑑定や危険なサイトの判定を行う</p>
                        <p>Web3セキュリティツール</p>
                    </Description>
                )
            }

            <div
                style={
                    media.isMobile ? {
                        marginTop: '50px',
                        marginBottom: '20px',
                    } : {
                        display: 'flex',
                        width: '300px',
                        margin: '0 auto',
                    }
                }
            >
                <StyledButton
                    action={handleDocsClick}
                    animation={animation}
                    firstRender={firstRender}
                    media={media}
                >
                    Docs
                </StyledButton>
                <StyledButton
                    action={handleInstallClick}
                    animation={animation}
                    firstRender={firstRender}
                    media={media}
                    style={`
                        font-family: "Noto Sans JP";
                        font-weight: 500;
                    `}
                >
                    インストール
                </StyledButton>
            </div>
        </Container>
    )
}