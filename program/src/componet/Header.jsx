import React from 'react'
import '../componet/style.css'
import{FaRegUser} from 'react-icons/fa'
import{BiMessageRoundedDetail} from 'react-icons/bi'
import{HiOutlineShoppingCart} from 'react-icons/hi'


const Header = () => {
  return (
    <div>
        <header>
            <div className="container">
                <div className="row-1">

                    <div className="logo">
                      <p><strong>My</strong>Quotes.com</p>
                    </div>

                    <div className="search-b">
                      <input type="text" name="" id=""/>
                      <button>Search</button>
                    </div>

                    <div className="inner-icone">

                      <div className="ic-1 contact-1">
                        <i className="icones"><FaRegUser style={{width:"30px",height:"25px"}}/></i>
                        <p>My Account</p>
                      </div>

                      <div className="ic-1">
                      <i className="icones"><BiMessageRoundedDetail style={{width:"28px",height:"28px"}}/></i>
                      <p>Message</p>
                      </div>

                      <div className="ic-1">
                      <i className="icones"><HiOutlineShoppingCart style={{width:"28px",height:"28px"}}/></i>
                      <p>Cart</p>
                      </div>

                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header