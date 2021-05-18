import React, { useEffect, useState } from "react";
import { getProductById, getUserConfig } from "../../actions/product";
import {connect} from 'react-redux';
import Shimmer from "../widgets/shimmerEffect"
const Detail = (props) => {
    const [productId , setProductName] = useState(props.match.params.productId);
    const [userName , setUserName] = useState(props.match.params.userName);
    const [productDetail , setProductDetail] = useState({});
    
    useEffect(() => {
        props.getUserConfig(userName);  
        props.getProductById(productId);
    }, [productId]);

    useEffect(()=>{
        // setBanner(props.bannerUrl)
    },[props.bannerUrl])

    useEffect(() =>{
        setProductDetail(props.productDetail)
    }, [props.productDetail]);
    
    console.log(props, productDetail);
    if(props.product_detail_loading){
        return <Shimmer />
    }
    return(

        productDetail ? <section class="single-product" style={{"margin-top" : "110px"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="prod-img">
                <img class="img-fluid" src={productDetail.imgUrl} alt="" />
              </div>
            </div>
    
            <div class="col-md-6">
              <div class="prod-wrapper">
                <div class="prod-details">
                  <div class="prod-name-details">
                    {productDetail.productName && <h5>{productDetail.productName}</h5>}
                    {productDetail.brandName && <h6>{productDetail.brandName}</h6>}
                  </div>
                  {productDetail.price && <div class="prod-price">
                    <h5>${productDetail.price}</h5>
                  </div>}
                </div>
              </div>
              {productDetail.productDescription && <div class="prod-text" dangerouslySetInnerHTML={{ __html: productDetail.productDescription ? productDetail.productDescription.replaceAll('&lt;' , '<') : "product description" }}>
              </div>}
    
              {productDetail.url && <div class="prod-btns">
                <a class="buy-now" href={productDetail.url} target="_blank">Buy now</a>
              </div>}
            </div>
          </div>
        </div>
      </section>
       : <div></div>
    )
}

const mapStateToProps = ( state ) => ( {
    product_detail_loading : state.product.product_detail_loading,
    productDetail: state.product.productDetail,
    // bannerUrl: state.product.bannerUrl,
    theme: state.product.theme,
    buttonColor: state.product.buttonColor,
} );

const mapDispatchToProps = {
    getProductById,
    getUserConfig
};

export default connect( mapStateToProps, mapDispatchToProps )( Detail );
