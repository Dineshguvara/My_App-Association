import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    postings:[
        {
            label:"President",
            value:"president"
        },
        {
            label:"Secretary",
            value:"secretary"
        },
        {
            label:"Chairman",
            value:"chairman"
        }
    ]
}

export const newSlice = createSlice({
    name:"poste",
    initialState,
    reducers:{
        addPostings: (state, { payload }) => (state = { ...state, postings: addPosting(state,payload) }),

    }
}) 

function addPosting(state, data){
    return state.postings.concat(data);
}
 
export const {addPostings} = newSlice.actions;
export default newSlice.reducer