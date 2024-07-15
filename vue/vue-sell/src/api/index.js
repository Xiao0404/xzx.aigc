import {get} from './axios.js'

const getSeller = get('seller')
const getGoods = get('goods')
const getComments = get('comments')


export {
    getSeller,getGoods,getComments
}