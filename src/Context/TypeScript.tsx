export type Addtransaction={
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
   addTransaction: (transaction: Addtransaction) => void,
   removeTransaction:(id: number) => void
}

export type Actions=
  | {type: 'ADD_TRANSACTION', payload: Addtransaction}
//   | {type: 'REMOVE_TRANSACTION',payload: number}
