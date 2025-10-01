import { useEffect, useRef } from 'react'
import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
  title?: string
  className?: string
  style?: React.CSSProperties
  hideModal?: boolean
  onClick?: () => void
}

const Image = (props: ImageProps) => {
  const { src, alt, title, className, style, hideModal, onClick } = props
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const img = imgRef.current
    const container = containerRef.current
    if (!img || !container) return

    const handleLoad = () => container.classList.add('loaded')

    if (img.complete) {
      handleLoad()
    } else {
      img.addEventListener('load', handleLoad)
      return () => img.removeEventListener('load', handleLoad)
    }
  }, [src])

  const blurredSrc = title ? `${title}-blurred.webp` : ''

  return (
    <div
      ref={containerRef}
      className={`blurred-img ${className || ''}`}
      style={{ ...style, cursor: !hideModal ? 'pointer' : 'default', backgroundImage: blurredSrc ? `url(${blurredSrc})` : undefined }}
      onClick={onClick}
    >
      <NextImage
        ref={imgRef}
        src={src}
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

