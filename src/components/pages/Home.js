import React, { useEffect } from 'react'
import { getUserConfig, getProductByUserId } from '../../actions/product'
import { useDispatch, useSelector } from 'react-redux'
import Shimmer from '../widgets/shimmerEffect'
import { useHistory } from 'react-router-dom'
import '../../scss/home.scss'

const Home = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()
    console.log("dddddddddddd", props.match.params.userName)
    const userName = props.match.params.userName
    const product_detail_loading = useSelector((state) => state.product.product_detail_loading)
    const productList = useSelector((state) => state.product.productList)
    const bannerUrl = useSelector((state) => state.product.bannerUrl)

    useEffect(() => {
        dispatch(getUserConfig(userName))
        dispatch(getProductByUserId(userName))
    }, [dispatch, userName]);

    const goToDetailPage = (url) => {
        history.push(url);
    }
    return(
        <>
        <div className='menu'>
          <ul>
            <li>Free shipping on orders over $30</li>
            <li>Support a creator</li>
            <li>Easy domestic returns</li>
          </ul>
        </div>
        {bannerUrl && <div className='banner' style={{backgroundImage: `url('${bannerUrl}')`}}></div>}

        <div className='products'>
            {productList.length ? productList.map((item) => (
                <div className='product' onClick={() => goToDetailPage(`${userName}/${item.id}`)} key={item.id}>
                    <div className='avatar'>
                        <img src={item.imgUrl} alt='' />
                    </div>
                    <div className='content'>
                        <p className='title'>{item.productName}</p>
                        <p className='title'>{item.brandName}</p>
                        <p className='price'>${item.price}</p>
                    </div>
                </div>
            )) : <div>No product Available</div>}
        </div>
        </>
    )
}

export default Home; 
