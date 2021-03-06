import { createSlice } from "@reduxjs/toolkit";



export const  employeeSlice = createSlice({
    name:'emp',

    initialState:{
        empData:JSON.parse(localStorage.getItem("employee"))||
        [
            {
                id:"1",
                name:"mellad",
                email:'melladmor@gmail.com',
                phone:"0966666666",
                birthdate:"5/2/2000",
                jobtitle:"programer",
                salary:"200"
            },
            {
                id:"2",
                name:"salem",
                email:'salem@gmail.com',
                phone:"0966666666",
                birthdate:"5/2/2000",
                jobtitle:"programer",
                salary:"200"
            },
            {
                id:"3",
                name:"ahmad",
                email:'ahmad@gmail.com',
                phone:"0966666666",
                birthdate:"5/2/2000",
                jobtitle:"programer",
                salary:"200"
            }
            ,{
                id:"4",
                name:"rami",
                email:'rami@gmail.com',
                phone:"0966666666",
                birthdate:"5/2/2000",
                jobtitle:"programer",
                salary:"200"
            }
        ],
        empFilter:'',
        loading:false,
        lodaingDelete:false,
        lodaingUpdate:false,
    },

    
    

    

    reducers:{
        startUser:(state)=>{
            state.loading = true;
        }
        ,
        sucssesUser:(state, action)=>{
            state.empData.push(action.payload);
            state.loading = false;
        },


        startDelete:(state)=>{
            state.lodaingDelete = true
        },
        successDelete:(state , actoin )=>{
            state.empData = state.empData.filter(el => el.id !== actoin.payload.id)
            state.lodaingDelete = false
        },

        startUpdate:(state)=>{
            state.lodaingUpdate = true;
        },
        successUpdate:(state, action)=>{
            state.empData = state.empData.map((el)=> el.id === action.payload.id ? action.payload :el)
            state.lodaingUpdate = false;
        }
        ,
        searchEmp:(state ,action)=>{
            state.empFilter = action.payload;
        }
        
    }
});

export const {startUser ,sucssesUser ,startDelete ,successDelete ,startUpdate ,successUpdate ,searchEmp} = employeeSlice.actions

export default employeeSlice.reducer