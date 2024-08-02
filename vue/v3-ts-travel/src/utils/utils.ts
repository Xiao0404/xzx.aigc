export const getCurrency = (price:number) => {
    return '￥' + price.toFixed(2)
}