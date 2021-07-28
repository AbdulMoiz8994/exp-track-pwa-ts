import React,{useContext} from 'react'
// import {TransactionType} from '../Context/UseContext'

export interface Transactions{
       id: number,
       desc:string,
       amount: number
}


export const TransactionHistory = () => {



    return (
        <div>
            <h2>Transaction History</h2>
{/* 
            <ul>
                {transactions.map((transObj: Transactions) =>{
                    return(
                        <li key={transObj.id}>
                         {transObj.desc} <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul> */}
        </div>
    )
}
