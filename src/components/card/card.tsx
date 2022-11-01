import React, { memo } from 'react'
import styled from 'styled-components'

export type State = 'safe' | 'unsafe' | 'unknown'

export interface Props {
  type: string
  name: string
  icon: string
  detail: string
  state: State
  className: string
}

interface Attrs extends Props {
  src: string
}

const colors = {
  safe: '#32F58C',
  unsafe: '#F34363',
  unknown: '#C5CCCE',
}

const Container = styled.div`
  border-radius: 10px;
  border: solid 4px ${({ state }: { state: State }) => colors[state]};
  background: #141414;
  width: 387px;
`

const Wrapper = styled.div`
  color: white;
  font-family: 'Poppins', sans-serif;
  margin: 15px 15px 15px 20px;

  & a {
    color: inherit;
    text-decoration : none;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  line-height: 30px;
  font-size: 16px;
  margin-top: 5px;
`

const Collection = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;

  font-size: 14px;
  margin-top: 10px;
`

const Detail = styled.div`
    color: #e3e3e3;
    font-weight: 300;
    font-size: 12px;
    margin-top: 10px;
`

const Icon = styled.div`
  display: block;
  width: 21px;
  height: 21px;
  border-radius: 100%;
  background-size: cover;
  background-image: url(${(props: Partial<Attrs>) => props.src});
`

const ReportButtonWrapper = styled.a`
  transform: translate(-8px, 3px);
  fill: white;
  pointer-events: none;
`

const TwitterButtonWrapper = styled.a`
  margin-top: 10px;
  fill: white;
  opacity: 1;
  display: block;
  pointer-events: none;
`

const ReportButton = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 512 512'>
    {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
    <path d='M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z'/>
  </svg>
)

const TwitterButton = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='18px' height='18px' viewBox='0 0 512 512'>
    {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
    <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'/>
  </svg>
)

export default memo(({
  type,
  name,
  state,
  icon,
  detail,
  className,
}: Props) => (
  <Container className={className} state={state}>
    <Wrapper>
      <Header>
        <span>{type}</span>
        <ReportButtonWrapper>
          <ReportButton />
        </ReportButtonWrapper>
      </Header>
      <Collection>
        <Icon src={icon} />
        <span>{name}</span>
      </Collection>
      <Detail>{detail}</Detail>
      <TwitterButtonWrapper>
        <TwitterButton />
      </TwitterButtonWrapper>
    </Wrapper>
  </Container>
))

