import React, { useCallback, useState, memo } from 'react'
import styled from 'styled-components'
import EagisLogo from '../../assets/images/eagis-logo.png'
import './style.css'

export interface Item {
  label: string
  delay: number
  active?: boolean
  onClick?: any
}

interface Media {
  isMobile: boolean
  isTablet: boolean
}

interface Props {
  items: Item[]
  media: Media
  refs: any[]
}

interface Attrs extends Omit<Props, 'items'> {
  src: string
  items: number
  active: boolean
  delay: number
}

const Logo = styled.div`
  margin: 25px auto 10px;

  display: block;
  width: 175px;
  height: 50px;

  background-image: url(${({ src }: Partial<Attrs>) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  animation: fadein-logo 800ms ease 400ms forwards;
  opacity: 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: Partial<Attrs>) => props.items || 5}, 1fr);
  grid-column-gap: 30px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
`

const HeaderItem = styled.div.attrs((props: Partial<Attrs>) => ({
  delay: props.delay || 0,
  active: props.active,
}))`
  font-weight: ${({ active }) => active ? 600: 200};
  font-size: 18px;
  width: 110px;
  animation: fadein-item 800ms ease ${({ delay }) => delay * 230}ms forwards;
  opacity: 0;
  cursor: pointer;
`

const Container = styled.div`
  ${({ media }: { media: Media }) => {
    return media.isTablet ? '' : `
      display: grid;
      grid-template-rows: repeat(2, 1fr);
    `
  }}
`

export default memo(({
  items,
  media,
  refs,
}: Props) => {
  const [activeId, setActiveId] = useState(items.findIndex(({ active }) => active))
  const [cooldown, setCooldown] = useState(performance.now())

  const handleOnClick = useCallback((id, onClick) => {
    if (performance.now() - cooldown < 1000) return

    if (refs[id].current?.getAttribute('ignore-animation') === 'true') {
      refs[id].current?.setAttribute('ignore-animation', 'false')
    } else {
      onClick()
    }

    setActiveId(id)
    setCooldown(performance.now())
  }, [])

  return (
    <Container media={media}>
      <Logo src={EagisLogo} />
      {!media.isTablet && (
        <Wrapper items={items.length}>
          {items.map(({ delay, label, onClick }: Item, id) => (
            <HeaderItem
              key={id}
              delay={+delay}
              active={id === activeId}
              ref={refs[id]}
              onClick={() => handleOnClick(id, onClick)}
            >{label}</HeaderItem>
          ))}
        </Wrapper>
      )}
    </Container>
  )
})

