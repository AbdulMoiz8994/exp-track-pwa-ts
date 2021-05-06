import React,{useReducer,createContext} from 'react'
// import {CreateUserContext} from './CreateContext'
import {Reducer} from './Reducer'
import {ADD_TRANSACTION,REMOVE_TRANSACTION} from './Types'

export type addtransaction={
    id: number,
    desc: string,
    amount: number
}

export interface TransactionType{
    transactions:{
    id: number,
    desc:string,
    amount: number
}[];
   addTransaction: (transaction: addtransaction) => void,
   removeTransaction:(id: number) => void
}


const InitialValue: TransactionType={
    transactions:[
        {id:1,desc:"Salary",amount:+1000},
        {id:2,desc:"Bonus",amount:+500},
        {id:3,desc:"Food",amount:-200},
        {id:4,desc:"Dinner",amount:-300},
    ],
    addTransaction: () => {},
    removeTransaction: () => {},

}
export const CreateUserContext=createContext<TransactionType>(InitialValue)

// we create the context api in smae file 

// The React.NOde is default type of children attribute
// we get all the compoents via porps and we do destructure thischildren beacuse by default we get children name
// (children:React.ReactNode)
export const UseContext: React.FC<React.ReactNode>= ({children}) => {
       
// UseReucer
   const [state,dispatch]=useReducer(Reducer,InitialValue)
   console.log(state);
   

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
             {children}
            </CreateUserContext.Provider>
        </div>
    )
}
