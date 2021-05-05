import React,{useContext} from 'react'
export const AddTransaction = () => {
    return (
        <div>
            <h2>Add Transaction</h2>
            <form>
           <label>Description</label>
           <input type="text" placeholder="Enter Description"/>
           <label>Amount</label>
           <p>(Expense,Income)</p>
           <input type="number" placeholder="Enter Amount"/>
           <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}
