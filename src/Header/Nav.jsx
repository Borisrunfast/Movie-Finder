import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [toggle, setToggle] = useState(true)

    return (
        <nav className='ml-auto inline-block'>
            <button onClick={() => setToggle(!toggle)} className='mt-3 mr-3 p-3 py-1 text-xl font-bold text-gray-100 bg-slate-400 rounded-xl'>MENU</button>

            
            {toggle &&
                <ul className='mr-3 mt-4 flex-col h-fit w-fit bg-slate-900 absolute right-0.5'>
                    <Link to='/' className='list-items'>Home</Link>
                    <Link to='/movies' className='list-items'>Movies</Link>
                    <Link to='/favorite' className='list-items'>Favorite</Link>
                </ul>
            }
            
        </nav>
    )
}

export default Nav