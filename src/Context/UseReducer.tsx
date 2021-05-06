
import {ADD_TRANSACTION,REMOVE_TRANSACTION} from './Types'
import {addtransaction} from './UseContext'

export type Actions=
  | {type: 'ADD_TRANSACTION', payload: addtransaction}
  | {type: 'REMOVE_TRANSACTION',payload: number}


export const Reducer=(state:addtransaction,action: Actions) =>{
    switch(action.type){
        case ADD_TRANSACTION:
            console.log(state);
            
            return{
                ...state,
                transactions: [action.payload,...state]
            }
    }
}