'use client'

import Card from "@/components/elements/Card";
import Input from "@/components/elements/Input";
import { AddCircle, Close } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface InputDataMasterProps {
    props: string;
}

const InputDataMaster: React.FC<InputDataMasterProps> = ({props}) =>{
    const router = useRouter()

    const [data, setData] = useState<string>('')

    const handleAdd = async (par: string, e: any) => {
        console.log(par)
        e.preventDefault()

        await fetch('/api/master/'+par, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            // console.log(res)
            router.refresh()
        }).catch((e) => {
            console.log(e)
            
        }).finally(() => {
            setData('')
        })
    }

    return(
        <div>
            <Card className="relative w-60 p-5 bg-slate-100 rounded-md flex items-center justify-center flex-col">
                <div className="flex justify-between items-center w-full">
                    <Input type="text" className="p-2 rounded-md w-44 bg-white w-full mb-5 text-slate-500" name={props} onChange={(e) => setData(e.target.value)} value={data}/>
                    <div onClick={(e) => handleAdd(props, e)}>
                        <AddCircle fontSize="medium" color="primary" style={{ color: "#f5ae85"}} className='cursor-pointer absolute top-0 right-0 -translate-x-4 translate-y-4' />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default InputDataMaster