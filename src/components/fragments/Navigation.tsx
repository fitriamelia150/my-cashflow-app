'use client'
import { AccountCircle, Fitbit, Notifications } from "@mui/icons-material";

export default function Navigation(){
    return(
        <div className="absolute top-0 left-0 z-10 p-5 h-16 w-full bg-white flex justify-between border-[1px] border-slate-100">
            <Fitbit fontSize="medium" color="primary"/>

            <div className="flex gap-5">
                <Notifications fontSize="medium" color="primary" style={{color: "#818FB4"}}/>
                <AccountCircle fontSize="medium" color="primary" style={{color: "#818FB4"}}/>
            </div>
        </div>
    )
}