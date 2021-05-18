import { API_BASE_URL } from "../config";

const BASE_URL = API_BASE_URL;
const IMAGE_URL = "https://ik.imagekit.io/i2wp0fsg8dx/";

const getImageURL = (imgName) => IMAGE_URL.concat(imgName);

const EndPoints = {
    Users: {
        url: 'api/users',
    },
    Login : {
        url : "api/auth/login"
    },
    Register : {
        url : "api/auth/register"
    },
    Forgot_Password : {
        url : "api/auth/forgot-password"
    },
    ResetPassword : {
        url : "/api/auth/reset-password"
    },
    Auth: {
        url : "api/user/auth"
    },
    Product : {
        url : "api/product/user"
    },
    ProductOpen : {
        url : "api/product"
    },
    UserConfig: {
        url: "api/users/users/detail"
    },
    ProductList: {
        url: "api/users/product"
    },
    ProductDetail: {
        url : "api/users/product/detail"
    }
    
};

export { BASE_URL, EndPoints, getImageURL };