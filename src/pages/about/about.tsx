import React from 'react'
import styled from 'styled-components'
import Card from '../../components/card/card'
import type { State } from '../../components/card/card'
import './style.css'

const CardWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 500px;
`

const StyledCard = styled(Card)`
    display: inline-block;

    position: absolute;
    left: 50%;

    z-index: ${props => 3 - props.id};
`

const TitleWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;

    font-weight: 900;
    font-size: 30px;
    text-align: center;

    position: relative;
    top: 100px;

    p {
        font-size: 150px;
        font-style: italic;
        margin: -40px 0;
    }

    ${[
        {
            id: 1,
            style: `
                height: 100px;
                margin-top: 55px;
                background: linear-gradient(black 0, rgba(255,255,255,0) 100px);
            `,
        },
        {
            id: 3,
            style: `
                height: 200px;
                margin-top: 60px;
                background: linear-gradient(rgba(255,255,255,0) 0, black 100px);
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

export default () => (
    <>
        <TitleWrapper>
            {['Easy to get', 'Aegis with', 'Eagis'].map((text, key) => (
                <p
                    key={key}
                    style={{
                        opacity: '0',
                        animation: `fadein 800ms ease ${900 + key * 120}ms forwards`,
                    }}
                >
                    {text}
                </p>
            ))}
        </TitleWrapper>

        <CardWrapper>
            {['safe', 'unsafe', 'unknown'].map((state: State, key) => (
                <StyledCard
                    type={'NFT'}
                    name={'VeryLongAnimals'}
                    icon={'https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0'}
                    state={state}
                    detail={'Super Long Animal'}
                    id={key}
                    key={key}
                />
            ))}
        </CardWrapper>
    </>
)