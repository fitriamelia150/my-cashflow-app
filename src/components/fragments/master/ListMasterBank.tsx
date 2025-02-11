const getMasterBank = async () => {
    try {
        const res = await fetch(process.env.BASE_URL+'/api/master/bank');
        
        if (res.ok) {
            const json = await res.json();
            // console.log(json); // Log the response body
            return json.data_bank || [];

        } else {
            console.error("Failed to fetch data. Status:", res.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export default async function Listbank(){

    const datas = await getMasterBank();
    console.log('bank', datas)

    return(
        <div className="">
            {datas != null &&
                datas.length > 0 &&
                    datas.map((data: any) => 
                        <p key={data.id}>{data.mst_bank_name}</p>
                    )
            }
        </div>
    )
}