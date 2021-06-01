import React from 'react'
import { useSelector } from 'react-redux'
import '../scss/header.scss'

const Header = () => {

  const logo = useSelector((state) => state.product.logo);

  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="logo-img"/>
      </div>
    </> 
  );
}

export default Header;
