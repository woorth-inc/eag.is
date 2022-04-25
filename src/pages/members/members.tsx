import React from 'react'
import styled from 'styled-components'
import Member from '../../components/member/member'

import Taisuke from '../../assets/images/members-icon/nakano_taisuke.jpg'
import Haruto from '../../assets/images/members-icon/hirakawa_haruto.jpg'
import Reiya from '../../assets/images/members-icon/oishi_reiya.jpg'
import Kazuya from '../../assets/images/members-icon/okumura_kazuya.jpg'

import './style.css'

interface Props {
    animation: string
    firstRender: boolean
    isMobile: boolean
}

const MembersContainer = styled.div`
    font-size: 22px;
    text-align: center;

    ${({ isMobile }) => {
        return isMobile ? `
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            margin-top: 300px;
        ` : `
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        `
    }}

    display: grid;
    grid-gap: 40px;
    ${({ members, isMobile }) => {
        return isMobile ? `
            grid-template-rows: repeat(${members}, 1fr);
        ` : `
            grid-template-columns: repeat(${members}, 1fr);
        `
    }}

    opacity: ${({ animation, isMobile }) => isMobile ? 1 : animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender, isMobile }) => isMobile || firstRender ? '' : `animation: ${animation}-member 800ms ease 50ms forwards;`}
`

export default ({
    animation,
    firstRender,
    isMobile,
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
        <MembersContainer
            animation={animation}
            firstRender={firstRender}
            isMobile={isMobile}
            members={members.length}
        >
            {members.map((params, id) => (
                <Member
                    {...params}
                    animation={animation}
                    firstRender={firstRender}
                    key={id}
                />
            ))}
        </MembersContainer>
    )
}