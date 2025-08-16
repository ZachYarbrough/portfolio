'use client' 
import React, { useContext } from 'react'
import { ModalContext } from './context/modalContext'

const Image = (props: any) => {
    const { toggleModal } = useContext(ModalContext)

    return (
	<>
	    <img src={props.src} alt={props.alt} title={props?.title || ''} className={props?.className || ''} style={{ ...props?.style, cursor: !props?.hideModal ? 'pointer' : 'default' }} loading="lazy" onClick={() => !props?.hideModal && toggleModal(props.src, props.alt) } />
	</>
    )
}
export default Image
