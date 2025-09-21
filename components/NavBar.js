import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar(){
    const router = useRouter()
    const isActive = (r) =>{
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/" className="navbar-brand">
                DEVAT
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/cart" className={"nav-link" + isActive('/cart')}><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i> Cart</Link>                    
                    </li>
                    
                    <li className="nav-item">
                        <Link href="/signin" className={"nav-link" + isActive('/signin')}><i className="fa-solid fa-user" aria-hidden="true"></i> Sign in</Link>                    
                    </li>

                </ul> 
            </div>
        </nav>
    )
}

export default NavBar