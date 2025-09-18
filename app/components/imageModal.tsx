'use client'

import React, { useCallback, useContext, useEffect, useState } from "react"
import { ModalContext } from "./context/modalContext"

const ImageModal = () => {    
    const { imageObj, toggleModal } = useContext(ModalContext)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])


    const escFunction = useCallback((event: KeyboardEvent) => {
	if (event.key === "Escape") {
	    toggleModal()
	}
    }, []);

    useEffect(() => {
	document.addEventListener("keydown", escFunction, false);

	return () => {
	    document.removeEventListener("keydown", escFunction, false);
	};
    }, [escFunction]);

    useEffect(() => {
	if (width <= 1500) toggleModal()
    }, [width])

    return (
	<>
	{imageObj.src != '' && <div style={{ zIndex: 1000, width: '100vw', height: '100vh', position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'top', top: 0, left: 0 }}>
	    <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: 'black', opacity: 0.3, cursor: 'pointer' }} onClick={() => toggleModal('')} />
		<div style={{
                    zIndex: 1001,
                    width: '80%',
		    maxWidth: '1280px', 
		    maxHeight: '80%',
                    margin: 'auto',
		    display: 'flex'
                }}>
		    <div style={{ width: '100%', height: '100%', borderRadius: '0.5rem', border: '1px solid var(--background)', padding: '0.5rem 1rem', backgroundColor: 'var(--background)' }}>
			<img src={imageObj.src} alt={imageObj.alt} style={{ width: '100%', height: '100%', borderRadius: '0.5rem', border: '1px solid var(--secondary-light)', margin: '0.5rem 0 0.5rem 0' }} loading="lazy" />
		    </div>
		</div>
	    </div>
	}
	</>
    )
}

export default ImageModal
