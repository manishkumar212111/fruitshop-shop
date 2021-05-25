import React, { useEffect, useState } from "react";
import './index.scss'
import { getUserData } from "../../utils/globals"
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import icon from "../../static/image/person-circle.svg"
const Header = (props) => {

  const [logo , setLogo] = useState("");
  
  useEffect(() => {
    setLogo(props.logo);
  } , [props.logo])

  return (
    <>
      <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <div class="logo mr-auto">
          <h1><span><img style={{"height" : "44px"}} src={logo} alt="" /></span></h1>
        </div>

        <div class="user">
          <span><img style={{"height" : "24px"}} src={icon}></img></span>
        </div>
      </div>
    </header>
    </> 
  );
};

const mapStateToProps = ( state ) => ( {
  logo: state.product.logo,
});

const mapDispatchToProps = {
};

export default connect( mapStateToProps, mapDispatchToProps )( Header );
