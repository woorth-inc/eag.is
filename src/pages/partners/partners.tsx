import React from 'react'
import styled from 'styled-components'

import Microsoft from '../../assets/images/partners-logo/microsoft.png'
import MicrosoftAzure from '../../assets/images/partners-logo/microsoft_azure.png'
import VeryLongAnimals from '../../assets/images/partners-logo/verylonganimals.png'

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

interface Attrs extends Props {
}

const defaultMedia: Media = {
	isMobile: false,
	isTablet: false,
}

const Container = styled.div.attrs((props: Partial<Attrs>) => ({
	media: props.media || defaultMedia,
	animation: props.animation,
	firstRender: props.firstRender,
}))`
	font-size: 24px;
	text-align: center;
	display: block;

	${({ media }) => {
		return media.isTablet ? `
			margin-top: ${media.isMobile ? '10px' : '50px'};
		` : `
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		`
	}}

	opacity: ${({ animation, media }) => media.isTablet ? 1 : animation === 'fadein' ? 0 : animation === 'fadeout' ? 1 : 0};
	${({ animation, firstRender, media }) => media.isTablet || firstRender ? '' : `animation: ${animation}-company 800ms ease 50ms forwards;`}
`

const BannerWrapper = styled.div.attrs((props: Partial<Attrs>) => ({
	media: props.media || defaultMedia,
}))`
	${({ media }) =>
		media.isTablet ? `
			display: grid;
			justify-content: center;
			grid-gap: 5px;
			align-items: center;
			margin: 0 auto;
		` : ''
	}
`

const Banner = styled.img.attrs((props: Partial<Attrs>) => ({
	media: props.media || defaultMedia,
}))`
	height: ${({ media }) => media.isMobile ? '22px' : media.isTablet ? '30px' : '40px'};
	margin: 10px ${({ media }) => media.isTablet ? 'auto' : '20px'};
`

export default ({
	animation,
	firstRender,
	media,
}: Props) => (
	<Container
		animation={animation}
		firstRender={firstRender}
		media={media}
	>
		{media.isTablet && (
			<div
				style={{
					marginBottom: '20px',
					fontFamily: '"Noto Sans JP"',
					fontWeight: '500',
					fontSize: media.isMobile ? '18px' : '23px',
				}}
			>🤝パートナー</div>
		)}

		<BannerWrapper media={media}>
			{[Microsoft, MicrosoftAzure, VeryLongAnimals].map((src, id) => (
				<Banner
					media={media}
					src={src}
					key={id}
				/>
			))}
		</BannerWrapper>
	</Container>
)
