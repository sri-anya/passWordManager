import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-purple-200 flex justify-around items-center'>
            <div className="logo font-bold">Passop</div>
            <ul>
                <li>
                    <a href='/'>Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar
