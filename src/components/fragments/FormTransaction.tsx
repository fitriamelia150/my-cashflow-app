'use client'

import { useEffect, useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import SelectOption from "../elements/SelectOption";
import { useRouter } from "next/navigation";

export default function FormTransaction(){
    const router = useRouter()

    const [mstBank, setMstBank] = useState<string[] | []>([])
    const [mstType, setMstType] = useState<string[] | []>([])
    const [mstVia, setMstVia] = useState<string[] | []>([])
    const [mstTrxName, setMstTrxname] = useState<string[] | []>([])

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
            router.refresh()
        }).catch((e) => {
            console.log(e)
        })
    }

    const getBankMaster = async () => {
        try {
            const res = await fetch('/api/master/bank');
            
            if (res.ok) {
                const json = await res.json();
                // console.log('getBankMaster',json.data);
                return json.data || [];
    
            } else {
                console.error("Failed to fetch data bank. Status:", res.status);
                return null;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    const getMasterType = async () => {
        try {
            const res = await fetch('/api/master/type')

            if (res.ok) {
                const json = await res.json();
                // console.log('getMasterType',json.data);
                return json.data || [];

            } else {
                console.error("Failed to fetch data type. Status:", res.status);
                return null;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    const getMasterVia = async () => {
        try {
            const res = await fetch('/api/master/via')

            if (res.ok) {
                const json = await res.json();
                // console.log('getMasterVia',json.data);
                return json.data || [];

            } else {
                console.error("Failed to fetch data via. Status:", res.status);
                return null;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    const getMasterTrxname = async () => {
        try {
            const res = await fetch('/api/master/transaction')

            if (res.ok) {
                const json = await res.json();
                // console.log('getMasterTrxname',json.data);
                return json.data || [];

            } else {
                console.error("Failed to fetch data Trxname. Status:", res.status);
                return null;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    useEffect(()=>{
        const fetchBankMaster = async () => {
            const data = await getBankMaster();
            let data_arr : string[]= []
            data.map((item : any) => {
                data_arr.push(item.mst_bank_name)
            })

            setMstBank(data_arr);
        };

        const fetchMasterType = async () => {
            const data = await getMasterType();
            let data_arr : string[] = []
            data.map((item : any) => {
                data_arr.push(item.description)
            })
            setMstType(data_arr);
        };

        const fetchMasterVia = async () => {
            const data = await getMasterVia();
            let data_arr : string[] = []
            data.map((item : any) => {
                data_arr.push(item.description)
            })
            setMstVia(data_arr);
        };

        const fetchMasterTrxname = async () => {
            const data = await getMasterTrxname();
            let data_arr : string[] = []
            data.map((item : any) => {
                data_arr.push(item.description)
            })
            setMstTrxname(data_arr);
        };

        fetchBankMaster();
        fetchMasterType();
        fetchMasterVia();
        fetchMasterTrxname();

    },[])


    return (
        <div className="bg-white p-10 mb-10 border-[1px] border-slate-100 rounded-md">
            <h1 className="text-lg font-semibold mb-5">Transactions</h1>
            <div className="flex gap-10 text-slate-500 items-center flex-wrap">
                <Input type="text" placeholder={dateNow} className="text-sm capitalize p-3 rounded-md w-44 bg-slate-100" name="Date" onChange={(e) => setTrxDate(e.target.value)}/>
                
                <SelectOption name="Bank" dataList={mstBank} className="p-3 rounded-md w-44 bg-slate-100 text-sm uppercase" onChange={(e) => setTrxBankFrom(e.target.value)}/>
                <SelectOption name="Type" dataList={mstType} className="p-3 rounded-md w-44 bg-slate-100 text-sm uppercase" onChange={(e) => setTrxType(e.target.value)}/>
                <SelectOption name="Via" dataList={mstVia} className="p-3 rounded-md w-44 bg-slate-100 text-sm uppercase" onChange={(e) => setTrxVia(e.target.value)}/>
                <SelectOption name="Transaction" dataList={mstTrxName} className="p-3 rounded-md w-44 bg-slate-100 text-sm uppercase" onChange={(e) => setTrxName(e.target.value)}/>
                <Input type="text" className="p-3 rounded-md text-sm capitalize w-44 bg-slate-100" name="Amount" placeholder="Rp 0.00" onChange={(e) => setTrxAmount(e.target.value)}/>
                <Input type="text" className="p-3 rounded-md text-sm capitalize w-44 bg-slate-100" name="Notes" placeholder="" onChange={(e) => setTrxNotes(e.target.value)}/>
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