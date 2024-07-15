import axios from 'axios';

const baseURL = '/api/'

export function get(url){
    return function(params = {}) {
      return  axios.get(baseURL+url, {params}).then(res =>{
            const {errno,data} = res.data
            if(errno === 0){
                if(errno === 0){
                    return data
                }else{
                    throw new Error(data)
            }
        }
        })
        .catch(err =>{
        console.log(err)
      })
    }
}