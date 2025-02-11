'use client'

import Card from "@/components/elements/Card";
import Input from "@/components/elements/Input";
import { AddCircle, Close } from "@mui/icons-material";
import { useState } from "react";

export default function InputMasterVia (){
    const [via, setVia] = useState('')

    const handleAdd = async (par: string, e: any) => {
        e.preventDefault()

        await fetch('/api/master/via', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(via)
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
                    <Input type="text" className="p-2 rounded-md w-44 bg-white w-full mb-5 text-slate-500" name="via" onChange={(e) => setVia(e.target.value)}/>
                    <div onClick={(e) => handleAdd('via', e)}>
                        <AddCircle fontSize="medium" color="primary" style={{ color: "#f5ae85"}} className='cursor-pointer absolute top-0 right-0 -translate-x-4 translate-y-4' />
                    </div>
                </div>
            </Card>
        </div>
    )
}