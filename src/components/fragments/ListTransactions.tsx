import { Delete, Edit } from "@mui/icons-material"

const getTransactions = async () => {
    try {
        const res = await fetch(process.env.BASE_URL+'/api/post');
        
        if (res.ok) {
            const json = await res.json();
            // console.log(json); // Log the response body
            return json.data_transactions || [];

        } else {
            console.error("Failed to fetch data. Status:", res.status);
            return null;
        }
        
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};


export default async function ListTransactions(){

    const data = await getTransactions();

    return(
        <div className="bg-white p-10 border-[1px] border-slate-100 rounded-md">
            <table className="w-full">
                <thead className="">
                    <tr className="h-20">
                        <th>No</th>
                        <th>Date</th>
                        <th>Bank</th>
                        <th>Type</th>
                        <th>Via</th>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Notes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 &&
                        data.map((item: any)  => 
                            <tr key={item.id} className="h-10 border-b-[1px] border-slate-400 text-center">
                                <td className="text-center">{item.id}</td>
                                <td>{item.trx_date}</td>
                                <td>{item.trx_bank_from}</td>
                                <td>{item.trx_type}</td>
                                <td>{item.trx_via}</td>
                                <td>{item.trx_name}</td>
                                <td>Rp {item.trx_amount}</td>
                                <td>{item.trx_notes}</td>
                                <td className="flex justify-center gap-5">
                                    <Edit fontSize="small" color="primary" style={{color:"#818FB4"}}/>
                                    <Delete fontSize="small" color="primary" style={{color:"#818FB4"}}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
