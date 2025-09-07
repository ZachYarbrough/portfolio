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

  return (
    <NextImage
      src={src}
      alt={alt}
      title={title || ''}
      className={className}
      style={{ ...style, cursor: !hideModal ? 'pointer' : 'default' }}
      width={800}
      height={400}
      onClick={onClick}
      loading="lazy"
      priority={false}
    />
  )
}

export default Image
