import React from 'react'
import styled from 'styled-components'
import Member from '../../components/member/member'

import Taisuke from '../../assets/images/members-icon/nakano_taisuke.jpg'
import Haruto from '../../assets/images/members-icon/hirakawa_haruto.jpg'
import Reiya from '../../assets/images/members-icon/oishi_reiya.jpg'
import Kazuya from '../../assets/images/members-icon/okumura_kazuya.jpg'

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
    font-size: 22px;
    text-align: center;
    display: block;

    ${({ media }) => {
        return media.isTablet ? `
            margin-top: 20px;
            width: 300px;
            margin: 100px auto;
        ` : `
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        `
    }}

    opacity: ${({ animation, media }) => media.isTablet ? 1 : animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender, media }) => media.isTablet || firstRender ? '' : `animation: ${animation}-member 800ms ease 50ms forwards;`}
`

const MemberWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    ${({ members, media }) => {
        return media.isTablet ? `
            grid-template-rows: repeat(${members}, 1fr);
        ` : `
            grid-template-columns: repeat(${members}, 1fr);
        `
    }}
`

export default ({
    animation,
    firstRender,
    media,
}: Props) => {
    const members = [
        {
            name: 'Taisuke Nakano',
            icon: Taisuke,
            twitter: 'ta1suke',
            github: 'ta1suke',
        },
        {
            name: 'Haruto Hirakawa',
            icon: Haruto,
            twitter: 'jpnykw',
            github: 'jpnykw',
        },
        {
            name: 'Reiya Oishi',
            icon: Reiya,
            twitter: 'mi0256',
            github: 'mio256',
        },
        {
            name: 'Okumura Kazuya',
            icon: Kazuya,
            twitter: 'mixaz017',
            github: 'mixaz017',
        }
    ]

    return (
        <Container
            animation={animation}
            firstRender={firstRender}
            disableClick={animation !== 'fadein' && !media.isTablet}
            media={media}
        >
            {
                media.isTablet && (
                    <div style={{
                        marginBottom: '20px',
                        fontFamily: '"Noto Sans JP"',
                        fontWeight: '500',
                        fontSize: media.isMobile ? '18px' : '23px',
                    }}>
                        👥メンバー
                    </div>
                )
            }
            <MemberWrapper
                media={media}
                members={members.length}
            >
                {members.map((params, id) => (
                    <Member
                        {...params}
                        animation={animation}
                        firstRender={firstRender}
                        media={media}
                        key={id}
                    />
                ))}
            </MemberWrapper>
        </Container>
    )
}