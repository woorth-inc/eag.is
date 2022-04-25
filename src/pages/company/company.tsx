import React from 'react'
import styled from 'styled-components'
import WoorthIncLogo from '../../assets/images/woorth-inc-logo.png'
import './style.css'

interface Props {
    animation: string
    firstRender: boolean
    isMobile: boolean
}

const CompanyContainer = styled.div`
    font-size: 24px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    pointer-events: ${({ disableClick }) => disableClick ? 'none' : 'all'};
    opacity: ${({ animation }) => animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender }) => firstRender ? '' : `animation: ${animation}-company 800ms ease 50ms forwards;`}

    & div {
        width: 415px;
        padding: 0 30px;
    }
`

const LeftWrapper = styled.div`
    font-size: 18px;

    & > p {
        margin: 0;
    }

    & > p:nth-of-type(1) {
        font-size: 30px;
    }

    & > p:nth-of-type(3) {
        margin-top: 40px;
    }
`

const RightWrapper = styled.div`
    background: url('${WoorthIncLogo}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`

const LinkWrapper = styled.div`
    margin-top: 40px;
    text-align: right;
`

const Link = styled.p`
    margin: 0 60px;;
    cursor: pointer;

    &::after {
        content: '';
        margin-left: 5px;
        margin-top: 7px;

        position: absolute;
        height: 20px;
        width: 20px;

        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' fill='%23fff'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z'/%3E%3C/svg%3E") 0 0 no-repeat;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

export default ({
    animation,
    firstRender,
    isMobile,
}: Props) => (
    <CompanyContainer
        animation={animation}
        firstRender={firstRender}
        disableClick={animation === 'fadeout'}
    >
        <LeftWrapper>
            <p>"無限の価値を見つけて伸ばす"</p>
            <p>を目標にWeb3領域の事業を進めるスタートアップ</p>
            <p>急成長するこの領域で正常に発展できる基盤を作るべく様々な事業に取り組んでいます。NFTやその他Web3事業でお困りのことやご相談があれば気軽にお問い合わせください。</p>

            <LinkWrapper>
                <Link onClick={() => open('https://woorth.io/')}>コーポレートサイトへ</Link>
                <Link onClick={() => open('blank')}>お問い合わせ</Link> {/* TODO: リンクを追加 */}
            </LinkWrapper>
        </LeftWrapper>
        <RightWrapper />
    </CompanyContainer>
)
