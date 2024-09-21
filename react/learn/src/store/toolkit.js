import {createSlice,configureStore,createAsyncThunk} from '@reduxjs/toolkit';

export  let changeMesThunk = createAsyncThunk('num/changeMesThunk',async(payload)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(payload)
        },2000)
    })
})


 let  mesSlice = createSlice({
    name:'mes',
    initialState:{
        mes:'hello'
    },
    reducers:{
        addMes:(state,action)=>{
            state.mes= action.payload
        }
    },
    extraReducers:(chunk)=>{
        chunk
            .addCase(changeMesThunk.pending,(state,action)=>{
            console.log('pending') 
        })
            .addCase(changeMesThunk.fulfilled,(state,action)=>{
            state.mes = action.payload
        })
    }
 })

 let numSlice = createSlice({
    name:'num',
    initialState:{
        num:0
    },
    reducers:{
        addNum:(state,action)=>{
            state.num += 1
        }

    }

 })

export const {changeMes} = mesSlice.actions;
export const {addNum} = numSlice.actions;


let store = configureStore({
    reducer:{

    mesReducer:mesSlice.reducer,
    numReducer:numSlice.reducer
    }
})

export default store;