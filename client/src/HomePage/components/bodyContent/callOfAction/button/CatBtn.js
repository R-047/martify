import React from 'react'
import './catBtn.css'

function CatBtn() {
    return (
        <div className='catBtn' onMouseOver={onHover} onMouseLeave={onleave}>
            <p id='coa'>VIEW CATALOG</p>
            <svg  className='line' width="3" height="30" viewBox="0 0 3 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line id='lineid' x1="1.5" y1="0.5" x2="1.5" y2="40.5" stroke="#333" strokeWidth="3" />
            </svg>
            <svg className='arrow'width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='arrowId' d="M23 30L33 20L23 10" stroke="#EE2E66" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


        </div>
    )
}

function onHover(){
    document.getElementById('coa').style.color = "white";
    document.getElementById('lineid').setAttribute('stroke', 'white');
    document.getElementById('arrowId').setAttribute('stroke', '#333');

}

function onleave(){
    document.getElementById('coa').style.color = "#333333";
    document.getElementById('lineid').setAttribute('stroke', '#333');
    document.getElementById('arrowId').setAttribute('stroke', '#EE2E66');
}

export default CatBtn
