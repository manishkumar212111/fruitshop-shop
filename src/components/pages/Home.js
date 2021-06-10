import React, { useEffect, useState } from "react";
import { getUserConfig, getProductByUserId } from "../../actions/product";
import {connect} from 'react-redux';
import Shimmer from "../widgets/shimmerEffect"
import { Link } from "react-router-dom";
import { categories } from "../../configs";
import Macy from "macy";
const Home = (props) => {
    const [userName , setUserName] = useState(props.match.params.userName);
    const [banner , setBanner] = useState('');
    const [category , setCategory] = useState('All');

    const [productList , setProductList] = useState([]);

    useEffect(() => {
      props.getUserConfig(userName);  
      props.getProductByUserId(userName);
    }, [userName]);

    useEffect(()=>{
        setBanner(props.bannerUrl);
        // setTheme(props.theme);
        // setButtonColor(props.buttonColor);
    },[props.bannerUrl])

    useEffect(() =>{
        setProductList(props.productList)
        Macy.init({ container: "#macy-container",
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            debug: true,
            mobileFirst: true,
            columns: 1,
            margin: {
                y: 25,
                x: '2%',
            },
            breakAt: {
                1200: 3,
                940: 3,
                520: 2,
                400: 2,
                320: 2
        }, });
    }, [props.productList]);

    const handleCategoryClick= (category) => {
        setCategory(category)
        if(category == 'All'){
            props.getProductByUserId(userName);
        } else {
            props.getProductByUserId(userName , {category : category});
        }
        document.getElementById('macy-container').scrollIntoView(true);
    }

    if(props.product_detail_loading){
        return <Shimmer />
    }
    console.log(categories)
    return(
        <>
        {banner && <section class="product-banner">
              
            <img class="img-fluid" src={banner} alt="" /> 
        </section>}

        <section className="masonry-grid" style={{"margin-top" : banner ? "0" : "40px"}}>
            <div className="container">
                <div className="sort-cate">
                    <ul>
                        <li onClick={() => handleCategoryClick('All')} style={{cursor : "pointer"}}><span href="#">All</span></li>
                        {
                            categories.map(itm => (
                                <li onClick={() => handleCategoryClick(itm.id)} style={{cursor : "pointer"}}><span href="#">{itm.text}</span></li>
                            ))
                        }
                    </ul>
                </div>
                {(props.product_list_loading  && !props.product_detail_loading) &&  <Shimmer /> }
                {!props.product_list_loading && <div id="macy-container">
                {productList.length > 0 ? productList.map((item,index) => (
                    <div className="child-element demo" data-macy-complete="1" macy-complete={index+1}>
                        <Link to={`${userName}/${item.id}`}>
                            <img src={item.imgUrl} alt="" style={{ "height" : item.imageType == 'square' ? "400px" : "614px"}} className="demo-image img-fluid" />
                            <div className="prod-name">
                                <h5>{item.productName}</h5>
                                <h6>${item.price}</h6>
                            </div>
                        </Link>
                    </div>
                )) : <div style={{color : "black"}}>No product Available</div>}
            </div>}
            </div>
        </section>
        </>
    )
}

const mapStateToProps = ( state ) => ( {
    product_detail_loading : state.product.product_detail_loading,
    product_list_loading : state.product.product_list_loading,
    productList: state.product.productList,
    bannerUrl: state.product.bannerUrl,
    theme: state.product.theme,
    buttonColor: state.product.buttonColor,
} );

const mapDispatchToProps = {
    getUserConfig,
    getProductByUserId
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
