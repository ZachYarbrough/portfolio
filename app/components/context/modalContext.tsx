'use client'

import { createContext, useState } from 'react';

type Image = {
    src: string,
    alt: string
}

export const ModalContext = createContext({
    imageObj: {
	src: '',
	alt: ''
    },
    toggleModal: (src?: string, alt?: string) => { }
})

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [imageObj, setImageObj] = useState<Image>({
	src: '',
	alt: ''
    })

    const toggleModal = (src?: string, alt?: string) => {
	setImageObj({
	    src: src || '',
	    alt: alt || ''
	})
    }

    return (
        <ModalContext.Provider value={{
            imageObj,
            toggleModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}
