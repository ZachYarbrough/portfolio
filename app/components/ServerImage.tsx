import { useState, useEffect, useRef } from 'react'
import NextImage from 'next/image'

interface ImageProps {
    src: string
    alt: string
    title?: string
    className?: string
    style?: React.CSSProperties
    imgStyle?: React.CSSProperties
    hideModal?: boolean
    onClick?: () => void
}

const Image = (props: ImageProps) => {
    const { src, alt, title, className, style, imgStyle, hideModal, onClick } = props
    const [loaded, setLoaded] = useState<boolean>(false)
    const imgRef = useRef<HTMLImageElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
	const img = imgRef.current
	const container = containerRef.current
	if (!img || !container) return

	const handleLoad = () => {
	    container.classList.add('loaded');
	    container.style.backgroundImage = 'none';
	}
	if (img.complete) {
	    handleLoad()
	} else {
	    img.addEventListener('load', handleLoad)
	    return () => img.removeEventListener('load', handleLoad)
	}
    }, [src])

    const blurredSrc = src ? `${src.split('.webp')[0]}_blurred.webp` : ''

    return (
	<div
	    ref={containerRef}
	    className={`blurred-img ${className || ''}`}
	    style={{
		...(imgStyle ? imgStyle : style),
		cursor: !hideModal ? 'pointer' : 'default',
		backgroundImage: blurredSrc ? `url(${blurredSrc})` : undefined,
	    }}
	    onClick={onClick}
	>
	    <NextImage
		ref={imgRef}
		src={src}
		style={{ ...imgStyle }}
		alt={alt}
		width={800}
		height={400}
		loading="lazy"
		priority={false}
	    />
	</div>
    )
}

export default Image

