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
}

const MembersContainer = styled.div`
    font-size: 22px;
    text-align: center;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    display: grid;
    grid-template-columns: repeat(${({ members }) => members}, 1fr);
    grid-gap: 60px;

    opacity: ${({ animation }) => animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
    ${({ animation, firstRender }) => firstRender ? '' : `animation: ${animation}-member 800ms ease 50ms forwards;`}
`

export default ({
    animation,
    firstRender,
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
            members={members.length}
        >
            {members.map((params, id) => (
                <Member
                    {...params}
                    key={id}
                />
            ))}
        </MembersContainer>
    )
}