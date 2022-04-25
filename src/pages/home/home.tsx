import React from 'react'
import styled from 'styled-components'
import Card from '../../components/card/card'
import Button from '../../components/button/button'
import type { State } from '../../components/card/card'

import PopupSafe from '../../assets/images/popup/safe.png'
import PopupUnsafe from '../../assets/images/popup/unsafe.png'
import PopupUnknown from '../../assets/images/popup/unknown.png'

import './style.css'

interface Props {
    animation: string
    firstRender: boolean
    isMobile: boolean
}

const Container = styled.div`
    ${({ isMobile }) => {
        return isMobile ? `
            position: relative;
            bottom: 50px;
        ` : ''
    }}
`

const StyledCard = styled(Card)`
    position: absolute;
    transform: translateX(-50%);
    left: calc(50% + ${({ id }) => ['-300px', '0px', '300px'][id]});
    z-index: ${({ id }) => 3 - id};

    -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-card`} 800ms ease ${({ id, animation, firstRender }) => (firstRender ? 900 : 30)  + (animation === 'fadein' ? id * 120 : (2 - id) * 120)}ms forwards;
`

const CardWrapper = styled.div`
    height: 198px;
    position: relative;
    bottom: ${({ isMobile }) => isMobile ? '20px' : '50px'};
`

const Title = styled.p`
    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-title`} 800ms ease ${({ id, animation, firstRender }) => (firstRender ? 900 : 30) + (animation === 'fadein' ? id * 120 : (2 - id) * 120)}ms forwards;
`

const TitleWrapper = styled.div`
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    transform: scale(1.4, 0.7);

    margin: 0 auto;
    position: relative;
    top: 30px;

    p {
        font-style: italic;
        font-size: ${({ isMobile }) => isMobile ? '60px' : '130px'};
        margin: ${({ isMobile }) => isMobile ? '-10px' : '-40px'} 0;
    }

    ${({ isMobile }) => {
        return isMobile ? `
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
    margin: 40px auto;
    width: 110px;
    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-button`} 800ms ease ${({ firstRender }) => firstRender ? 600 : 50}ms forwards;
`

export default ({
    animation,
    firstRender,
    isMobile,
}: Props) => {
    const handleDocsClick = () => {
        open('https://docs.eag.is/')
    }

    const handlePreRegisterClick = () => {
        open('blank') // TODO: リンクを追加
    }

    return (
        <Container isMobile={isMobile}>
            <TitleWrapper isMobile={isMobile}>
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

            {/* TODO: モバイルの場合は画像を表示する */}
            <CardWrapper isMobile={isMobile}>
                {
                    isMobile ? (
                        [PopupSafe, PopupUnsafe, PopupUnknown].map((src, id: number) => (
                            <img
                                style={{
                                    position: 'absolute',
                                    left: `calc(50% + ${[-300, 0, 300][id]}px)`,
                                    transform: 'translateX(-50%)',
                                    zIndex: 3 - id,
                                    WebkitBoxShadow: '0px 0px 15px 7px rgba(0, 0, 0, 0.3)',
                                    boxShadow: '0px 0px 15px 7px rgba(0, 0, 0, 0.3)',
                                }}
                                src={src}
                                key={id}
                            />
                        ))
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

            <div
                style={
                    isMobile ? {
                        margin: '20px 0',
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
                >
                    Docs
                </StyledButton>
                <StyledButton
                    action={handlePreRegisterClick}
                    animation={animation}
                    firstRender={firstRender}
                >
                    Pre-Register
                </StyledButton>
            </div>
        </Container>
    )
}