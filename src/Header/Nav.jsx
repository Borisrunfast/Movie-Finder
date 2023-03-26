import React, { useState } from 'react'


function Nav() {
    const [toggle, setToggle] = useState(true)

    return (
        <div className='ml-auto inline-block'>
            <button onClick={() => setToggle(!toggle)} className='mt-3 mr-3 p-3 py-1 bg-slate-400 rounded-xl'>MENU</button>

            
            {toggle &&
                <ul className='mr-3 mt-3 flex-row h-fit w-fit bg-slate-900 absolute right-0.5'>
                    <li className='list-items'>Home</li>
                    <li className='list-items'>Movies</li>
                    <li className='list-items'>Favorite</li>
                </ul>
            }
            
        </div>
    )
}

export default Nav