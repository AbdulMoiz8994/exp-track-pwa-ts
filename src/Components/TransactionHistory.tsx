import React,{useContext} from 'react'
import {CreateUserContext,addtransaction} from '../Context/UseContext'


export const TransactionHistory = () => {
const {transactions}=useContext(CreateUserContext)
console.log(transactions);


    return (
        <div>
            <h2>Transaction History</h2>
        </div>
    )
}
