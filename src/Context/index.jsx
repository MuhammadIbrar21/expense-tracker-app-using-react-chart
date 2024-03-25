import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({children}){

    const [formData, setFormData] = useState({
        type: 'income',
        amount: 0,
        description: '',
    })

    const [value, setValue] = useState('expense');

    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [allTransaction, setAllTransaction] = useState([]);

    function handleFormSubmit(currenFormData){
        // console.log(currenFormData);
        if(!currenFormData.description || !currenFormData.amount) return;
        
        setAllTransaction([
            ...allTransaction, 
            {...currenFormData, id: Date.now()},
        ]);
    }
    // console.log(allTransaction);

    return <GlobalContext.Provider
    value={{
        formData, setFormData,
        totalExpense, setTotalExpense,
        totalIncome, setTotalIncome,
        value, setValue,
        allTransaction, setAllTransaction,
        handleFormSubmit
    }}
    >{children}</GlobalContext.Provider>
}