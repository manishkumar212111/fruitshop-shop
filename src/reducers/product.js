
const initialState = {
    productList: [],
    product_detail_loading : false,
  };
  
  export default function ProductReducer(state = initialState, action) {
    const { type , data } = action;
    console.log(data);
    switch ( type ) {
        case 'SET_ALERT':
          return {...state, productDetail : data , product_detail_loading : false}
        case 'PRODUCT_DETAIL_LOADING' : 
            return {...state , product_detail_loading : data};
        case 'PRODUCT_LISTING':
          return {...state , productList : data , product_detail_loading : false};
        case 'SINGLE_PRODUCT_DETAIL' :
          return {...state , productDetail : data , product_detail_loading : false};
        case 'USER_CONFIG':
          return {...state , logo : data.style.logoUrl , bannerUrl : data.style.bannerUrl , theme: data.style.bannerUrl , buttonColor : data.style.buttonColor};
        default: return state;
    }
  }
  