import React,{useReducer,createContext} from 'react'
// import {CreateUserContext} from './CreateContext'
import {Reducer} from './Reducer'
import {ADD_TRANSACTION,REMOVE_TRANSACTION} from './Types'

export interface TransactionType{
    transactions:{
    id: number,
    desc:string,
    amount: number
}[];
   addTransaction: (transaction: addtransaction) => void,
   removeTransaction:(id: number) => void
}
export type addtransaction={
    id: number,
    desc: string,
    amount: number
}

const initialValue: TransactionType={
    transactions:[
        {id:1,desc:"Salary",amount:+1000},
        {id:2,desc:"Bonus",amount:+500},
        {id:3,desc:"Food",amount:-200},
        {id:4,desc:"Dinner",amount:-300},
    ],
    addTransaction: () => {},
    removeTransaction: () => {}

}
export const CreateUserContext=createContext<TransactionType>(initialValue)

// we create the context api in smae file 

export const UseContext: React.FC<React.ReactNode>= (props) => {
       
// UseReucer
   const [state,dispatch]=useReducer(Reducer,initialValue)

const addTransaction=(transaction:addtransaction) =>{
    dispatch({
        type: ADD_TRANSACTION,
        payload: transaction
    })

}
const removeTransaction=(id: number) =>{
   dispatch({
    type: REMOVE_TRANSACTION,
     payload: id    
   })

}

    return (
        <div>
            <CreateUserContext.Provider value={{
                transactions: state.transactions,
                addTransaction,
                removeTransaction
            }}>
             {props.children}
            </CreateUserContext.Provider>
        </div>
    )
}
