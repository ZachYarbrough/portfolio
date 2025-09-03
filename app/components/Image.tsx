'use client' 
import React, { useContext } from 'react'
import { ModalContext } from './context/modalContext'
import NextImage from './ServerImage'

const Image = (props: any) => {
    const { toggleModal } = useContext(ModalContext)

  const handleClick = () => {
    if (!props.hideModal) {
      toggleModal(props.src, props.alt)
    }
  }

    return <NextImage {...props} onClick={handleClick} />
}
export default Image
