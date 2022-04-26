import React from 'react'
import styled from 'styled-components'
import WoorthIncLogo from '../../assets/images/woorth-inc-logo.png'

import Button from '../../components/button/button'

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
            margin: 100px auto;
            width: ${media.isMobile ? 325 : 540}px;
            text-align: center;
        ` : `
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: calc(50% + 20px);

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 60px;
            align-items: center;
        `
    }}

    opacity: ${({ animation, media }) => media.isTablet ? 1 : animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender, media }) => media.isTablet || firstRender ? '' : `animation: ${animation}-company 800ms ease 50ms forwards;`}

    & div {
        width: ${({ media }) => media.isTablet ? 'auto' : '500px'};
        padding: 0 ${({ media }) => media.isMobile ? '0' : '30px'};
    }

    & p {
        font-family: 'Noto Sans JP';
        font-weight: 400;
        font-size: ${({ media }) => media.isTablet ? 12 : 16}px;
    }

    & p > span {
        font-family: Poppins;
    }
`

const LeftWrapper = styled.div`
    & > p {
        margin: 0;
        color: #c0c0c0;
    }

    & > p:nth-of-type(1) {
        font-size: ${({ media }) => media.isTablet ? 22 : 28}px;
        font-weight: 700;
        color: #fff;
    }

    & > p:nth-of-type(3) {
        margin-top: 40px;
        margin-bottom: 20px;
    }
`

const RightWrapper = styled.div`
    background: url('${WoorthIncLogo}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    height: ${({ media }) => media.isTablet ? 60 : 110}px;
    margin-bottom: ${({ media }) => media.isTablet ? 20 : 0}px;
`

const LinkWrapper = styled.div`
    margin-top: 40px;
    text-align: right;
`

const Link = styled.p`
    margin: 0 60px;
    font-size: 16px;
    cursor: pointer;
    color: #7070ed;

    &::after {
        content: '';
        margin-left: 5px;
        margin-top: 7px;

        position: absolute;
        height: 16px;
        width: 16px;

        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' fill='%237070ed '%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z'/%3E%3C/svg%3E") 0 0 no-repeat;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

const StyledButton = styled(Button)`
    font-size: 12px;
    line-height: 30px;
    width: 120px !important;
    height: 30px;
    margin: 20px auto;
`

const corporateLink = 'https://woorth.io/'
const contactLink = 'https://notionforms.io/forms/eagis-contact-form'

const Content = ({
    withoutLink
}) => (
    <>
        <p><span>"</span>無限の価値を見つけて伸ばす<span>"</span></p>
        <p>を目標に<span>Web3</span>領域の事業を進めるスタートアップ</p>
        <p>ブロックチェーン開発、暗号資産ウォレット開発、<span>NFT</span>発行支援等の<span>Web3</span>領域を包括したサービスの提供を行っています。また今後は<span>Web3</span>学習サービス等も提供予定です。</p>
        <p>急成長するこの領域で正常に発展できる基盤を作るべく様々な事業に取り組んでいます。<span>NFT</span>やその他<span>Web3</span>事業でお困りのことやご相談があれば気軽にお問い合わせください。</p>

        {
            !withoutLink && (
                <LinkWrapper>
                    <Link onClick={() => open(corporateLink)}>コーポレートサイトへ</Link>
                    <Link onClick={() => open(contactLink)}>お問い合わせ</Link>
                </LinkWrapper>
            )
        }
    </>
)

export default ({
    animation,
    firstRender,
    media,
}: Props) => (
    <Container
        animation={animation}
        firstRender={firstRender}
        disableClick={animation !== 'fadein' && !media.isTablet}
        media={media}
    >
        {
            media.isTablet ? (
                <>
                     <div style={{
                        marginBottom: '20px',
                        fontFamily: '"Noto Sans JP"',
                        fontWeight: '500',
                        fontSize: media.isMobile ? '18px' : '23px',
                    }}>
                        🏢会社概要
                    </div>

                    <RightWrapper media={media} />
                    <LeftWrapper media={media}>
                        <Content withoutLink={true} />
                        <div style={{ height: '25px' }} />
                        <StyledButton action={() => open(corporateLink)}>コーポレートサイト</StyledButton>
                        <StyledButton action={() => open(contactLink)}>お問い合わせ</StyledButton>
                    </LeftWrapper>
                </>
            ) : (
                <>
                    <LeftWrapper media={media}>
                        <Content withoutLink={false} />
                    </LeftWrapper>
                    <RightWrapper media={media} />
                </>
            )
        }
    </Container>
)
