import Logo from '@/app/_components/Logo'
import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center p-3'>
            <Logo/>

            <UserButton/>
        </div>
    )
}

export default Header