import React, {useState} from 'react'
import './slideBtn.css'
import NavPanel from '../../bodyContent/navPanel/NavPanel'

function SlideBtn() {
    var [slideStatus, setslideStatus] = useState(false);
    function onOpen(){
        setslideStatus(true);

        
    }

    function onClose(){
        setslideStatus(false);
    }

    return (
        <>
            <div className='slideBtn' onClick={onOpen}>
                <svg width="40" height="40" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 27H47.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.75 13.5H47.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.75 40.5H47.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>

            <NavPanel slideStatus={slideStatus} onClose={onClose}/>
        </>
    )
}


export default SlideBtn
