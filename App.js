import React from 'react'

import Image from './components/Image'
import ContactInfo from './components/ContactInfo'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'


export default function App() {
    return (
        <main className='main-container'>
            <Image />
            <ContactInfo />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}