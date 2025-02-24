import { Delete, Edit } from "@mui/icons-material";

interface ListMasterProps {
    props: string
}

const getMaster = async (par: string) => {
    // console.log('getMaster ', par)

    try {
        const res = await fetch(process.env.BASE_URL+'/api/master/'+par);
        
        if (res.ok) {
            const json = await res.json();
            // console.log('getMaster',json); // Log the response body
            return json.data || [];

        } else {
            console.error("Failed to fetch data. Status:", res.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const ListMaster: React.FC<ListMasterProps> = async ({props}) => {

    const datas = await getMaster(props);

    return(
        <div className="w-full rounded-md p-5 border-[1px]">

            {datas != null &&
                datas.length > 0 &&
                    datas.map((data: any) =>
                        <div key={data.id} className="flex justify-between w-full border-b-[1px] mb-5">
                            <p key={data.id} className="uppercase text-sm mb-2">
                                    {props == 'bank' && data.mst_bank_name}
                                    {props != 'bank' && data.description}
                                </p>

                            <div className="">
                                <Edit fontSize="medium" color="primary" style={{ color: "#f5ae85"}} className="cursor-pointer"/>
                                <Delete fontSize="medium" color="primary" style={{ color: "#f5ae85"}} className="cursor-pointer"/>
                            </div>
                        </div>
                    )
            }

            {datas == null || datas.length < 1 &&
                <div  className="flex justify-center w-full h-full">
                    <p  className="text-xs text-slate-500 font-semibold">You haven't sett any {props}</p>
                </div>
            }
        </div>
    )
}

export default ListMaster