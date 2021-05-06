import React,{useContext,useState} from 'react'
import {CreateUserContext} from '../Context/UseContext'
import {TransactionType} from '../Context/UseContext'

export const AddTransaction = () => {

const {addTransaction}=useContext(CreateUserContext)
console.log(addTransaction);

const [desc, getdec]=useState("")
const[amount,setamount]=useState(0)


const onSubmitFunc=(event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
  
      const addAll={
       id: Math.floor(Math.random() * 100000000),   
       desc,
       amount: +(amount), 
      } 
         addTransaction(addAll)           
}
getdec('')
setamount(0)
    return (
        <div>
            <h2>Add Transaction</h2>
            <form onSubmit={onSubmitFunc}>
           <label>Description</label>
           <input type="text" placeholder="Enter Description" value={desc} onChange={(e) => getdec(e.target.value)}/>
           <label>Amount</label>
           <p>(Expense,Income)</p>
           <input type="number" placeholder="Enter Amount" value={amount} onChange={(e) =>setamount(parseInt(e.target.value))}/>
           <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}
