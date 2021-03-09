import {environment} from 'src/environments/environment'; 


export const baseURl = environment.production ? 'https://api.ReviewProducts.com': 'http://localhost:3000'
export const wishlistURL = baseURl + '/wishlist'
