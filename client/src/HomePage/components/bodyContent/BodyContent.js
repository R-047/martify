import React from 'react'
import Coa from './callOfAction/Coa'
import Illustration from './illustration/Illustration'
import NavPanel from './navPanel/NavPanel'
import './bodyContent.css'

function BodyContent() {
    return (
        <>
        <NavPanel />
            <div className='bodyContent-container'>
            <div className='bodyContent'>
                <Coa />
                <Illustration />
            </div>
            
        </div>
        </>
        

    )
}

export default BodyContent
