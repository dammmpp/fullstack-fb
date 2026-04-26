import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Nav />
            
            <main className="grow bg-blue-100/50">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}

export default Layout