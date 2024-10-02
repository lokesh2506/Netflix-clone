import { createSlice } from "@reduxjs/toolkit"

 

const initialState={
    bannerData:[],
    imageURL:"",
    imageURLhz:"",
}
export const movieSlice=createSlice({
    name:'netflix',
    initialState,
    reducers:{
        setBannerData:(state,action)=>{
            state.bannerData=action.payload;
        },
        setImageURL:(state,action)=>{
            state.imageURL=action.payload;
        },
        setImageURLhz:(state,action)=>{
            state.imageURLhz=action.payload;
           
        }
    }
})

export const {setBannerData,setImageURL,setImageURLhz} =movieSlice.actions;
export default movieSlice.reducer;