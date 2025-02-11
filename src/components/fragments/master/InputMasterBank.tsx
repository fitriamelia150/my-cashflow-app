'use client'

import Card from "@/components/elements/Card";
import Input from "@/components/elements/Input";
import { AddCircle, Close } from "@mui/icons-material";
import { useState } from "react";

export default function InputMasterBank (){

    const [bank, setBank] = useState('')
    const [type, setType] = useState('')
    const [via, setVia] = useState('')
    const [transaction, setBTransaction] = useState('')
    let dataBody = ''

    const handleAdd = async (par: string, e: any) => {
        e.preventDefault()

        switch(par){
            case 'bank': dataBody = bank
            case 'type': dataBody = type
            case 'transaction': dataBody = transaction
        }

        await fetch('/api/master/'+par, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dataBody)
        }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }

    return(
        <div>
            <Card className="relative w-60 p-5 bg-slate-100 rounded-md flex items-center justify-center flex-col">
                <div className="flex justify-between items-center w-full">
                    <Input type="text" className="p-2 rounded-md w-44 bg-white w-full mb-5 text-slate-500" name="Bank" onChange={(e) => setBank(e.target.value)}/>
                    <div onClick={(e) => handleAdd('bank', e)}>
                        <AddCircle fontSize="medium" color="primary" style={{ color: "#f5ae85"}} className='cursor-pointer absolute top-0 right-0 -translate-x-4 translate-y-4' />
                    </div>
                </div>
            </Card>
        </div>
    )
}