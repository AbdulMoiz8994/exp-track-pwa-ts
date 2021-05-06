
import {ADD_TRANSACTION,REMOVE_TRANSACTION} from './Types'
import {addtransaction} from './UseContext'

// export type Actions={type: }


export const Reducer=(state:addtransaction,action: any) =>{
    switch(action.type){
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            }
    }
}