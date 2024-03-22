import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">

            <div className="logo font-bold text-white text-2xl">
                
                
                <span className='text-green-700'>&lt;</span>
                Passop
                <span className='text-green-700'>OP/&gt;</span>
                </div>
            <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href='/'>Home</a>
                    <a className='hover:font-bold' href='#'>Home</a>
                    <a className='hover:font-bold' href='#'>Home</a>
                </li>
            </ul>
            </div>

        </nav>
    )
}

export default NavBar
