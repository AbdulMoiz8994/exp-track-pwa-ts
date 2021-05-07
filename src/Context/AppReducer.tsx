import React ,{Reducer} from 'react';
// import {ADD_TRANSACTION,REMOVE_TRANSACTION} from './Types'
import {Actions} from  './TypeScript'
import {Addtransaction,TransactionType} from './TypeScript'



 const UseReducers:Reducer<Addtransaction[],Actions>=(state,action) =>{
    switch(action.type){
        case 'ADD_TRANSACTION':
            console.log(state); 
         return({
             ...state,
             transactions:[action.payload,...state]
         })
    }
}


export default UseReducers