import React,{useContext} from 'react'
import {CreateUserContext} from '../Context/UseContext'
// import {TransactionType} from '../Context/UseContext'

export interface Transactions{
       id: number,
       desc:string,
       amount: number
}


export const TransactionHistory = () => {
const {transactions}=useContext(CreateUserContext)
console.log(transactions);


    return (
        <div>
            <h2>Transaction History</h2>

            <ul>
                {transactions.map((transObj: Transactions) =>{
                    return(
                        <li key={transObj.id}>
                         {transObj.desc} <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
