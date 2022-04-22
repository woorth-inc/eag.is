import React from 'react'
import styled from 'styled-components'
import Card from '../../components/card/card'
import Button from '../../components/button/button'
import type { State } from '../../components/card/card'
import './style.css'

interface Props {
    animation: string
    firstRender: boolean
}

const StyledCard = styled(Card)`
    position: absolute;
    transform: translateX(-50%);
    left: calc(50% + ${({ id }) => ['-300px', '0px', '300px'][id]});
    z-index: ${({ id }) => 3 - id};

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-card`} 800ms ease ${({ id, animation, firstRender }) => (firstRender ? 900 : 30)  + (animation === 'fadein' ? id * 120 : (2 - id) * 120)}ms forwards;
`

const CardWrapper = styled.div`
    height: 198px;
    position: relative;
    bottom: 50px;
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
        font-size: 130px;
        font-style: italic;
        margin: -40px 0;
    }

    ${[
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
    }).join('\n')}
`

const StyledButton = styled(Button)`
    margin: 40px auto;
    opacity: ${({ animation }) => animation === 'fadein' ? 0 : 1};
    animation: ${({ animation }) => `${animation}-button`} 800ms ease ${({ firstRender }) => firstRender ? 600 : 50}ms forwards;
`

export default ({
    animation,
    firstRender,
}: Props) => {
    const handleButtonClick = () => {
        window.open('https://docs.eag.is/');
    }

    return (
        <div>
            <TitleWrapper>
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

            <CardWrapper>
                {['safe', 'unsafe', 'unknown'].map((state: State, id: number) => (
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
                ))}
            </CardWrapper>

            <StyledButton
                action={handleButtonClick}
                animation={animation}
                firstRender={firstRender}
            >
                Docs
            </StyledButton>
        </div>
    )
}