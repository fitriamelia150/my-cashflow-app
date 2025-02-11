import { Fitbit, Leaderboard, Payment, Settings } from '@mui/icons-material'
import  HomeIcon  from '@mui/icons-material/Home'
import Link from 'next/link'

export default function Sidebar() {
    return(
        <div className="absolute top-0 left-0 z-10 w-20 h-svh bg-white py-10 px-3 flex flex-col items-center gap-10 border-[2px] border-slate-100">
            <Fitbit fontSize="medium" color="primary"/>
            <Link href="/">
                <HomeIcon fontSize="medium" color="primary" style={{ color: "#818FB4"}} className='cursor-pointer'/>
            </Link>
            <Link href="/dashboard" className='cursor-pointer'>
                <Leaderboard fontSize="medium" color="primary" style={{ color: "#818FB4"}} className='cursor-pointer'/>
            </Link>
            <Link href="/payment" className='cursor-pointer'>
                <Payment fontSize="medium" color="primary" style={{ color: "#818FB4"}} className='cursor-pointer'/>
            </Link>
            <Link href="/master" className='cursor-pointer'>
                <Settings fontSize="medium" color="primary" style={{ color: "#818FB4"}} className='cursor-pointer'/>
            </Link>
        </div>
    )
}