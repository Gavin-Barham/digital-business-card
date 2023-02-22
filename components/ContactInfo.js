import React from 'react'

export default function ContactInfo() {
    return (
        <header className='info-container'>
            <h1>Gavin Barham</h1>
            <p className='small-text'>Full-Stack Developer</p>
            <a className='website' href='http://www.gavinbarham.com'>gavinbarham.com</a>
            <div className='button-container'>
                <a className='button linkedin' href='https://www.linkedin.com/in/gavin-barham-4ba088247/'><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                <a className='button email'><i className="fa-solid fa-envelope"></i>Email</a>
            </div>
        </header>
    )
}