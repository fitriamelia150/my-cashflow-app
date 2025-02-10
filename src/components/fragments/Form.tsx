'use client'

import { useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import SelectOption from "../elements/SelectOption";

export default function Form(){
    const [trxDate, setTrxDate] = useState('')
    const [trxBankFrom, setTrxBankFrom] = useState('')
    const [trxType, setTrxType] = useState('')
    const [trxName, setTrxName] = useState('')
    const [trxVia, setTrxVia] = useState('')
    const [trxAmount, setTrxAmount] = useState('')
    const [trxNotes, setTrxNotes] = useState('')
    
    const dateNow = getDate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const reqBody = JSON.stringify({
            trxDate,
            trxBankFrom,
            trxType,
            trxName,
            trxVia,
            trxAmount,
            trxNotes,
        })

        console.log('submit data: ', reqBody)

        await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: reqBody
        }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className="bg-white p-10 mb-10 border-[1px] border-slate-100 rounded-md">
            <h1 className="text-lg font-semibold mb-5">Transactions</h1>
            <div className="flex gap-10 text-slate-500 items-center flex-wrap">
                <Input type="text" placeholder={dateNow} className="p-3 rounded-md w-44 bg-slate-100" name="Date" onChange={(e) => setTrxDate(e.target.value)}/>
                <SelectOption name="Bank" dataList={['-','BCA','BSI', 'BRI', 'Mandiri', 'Hijra']} className="p-3 rounded-md w-44 bg-slate-100" onChange={(e) => setTrxBankFrom(e.target.value)}/>
                <SelectOption name="Type" dataList={['-','SAVING','SPENDING', 'BUDGETING']} className="p-3 rounded-md w-44 bg-slate-100" onChange={(e) => setTrxType(e.target.value)}/>
                <SelectOption name="Via" dataList={['-','QR', 'VA', 'TF', 'CASH']} className="p-3 rounded-md w-44 bg-slate-100" onChange={(e) => setTrxVia(e.target.value)}/>
                <SelectOption name="Transaction" dataList={['-','Rumah', 'Pulang Kampung', 'Kosan', 'Obat', 'Belanja']} className="p-3 rounded-md w-44 bg-slate-100" onChange={(e) => setTrxName(e.target.value)}/>
                <Input type="text" className="p-3 rounded-md w-44 bg-slate-100" name="Amount" placeholder="Rp 0.00" onChange={(e) => setTrxAmount(e.target.value)}/>
                <Input type="text" className="p-3 rounded-md w-44 bg-slate-100" name="Notes" placeholder="" onChange={(e) => setTrxNotes(e.target.value)}/>
                <Button type="submit" label="save" className="h-14 rounded-md w-44 bg-blue-500 text-white font-semibold uppercase hover:bg-blue-600" onClick={handleSubmit}/>
            </div>
        </div>
        
    )
}

function getDate(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return `${year} - ${month} - ${date}`;
}