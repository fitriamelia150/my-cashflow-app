import Card from "@/components/elements/Card";
import InputDataMaster from "@/components/fragments/master/InputMaster";
// import ListMaster from "@/components/fragments/master/ListMaster";
import ListMaster from "@/components/fragments/master/ListMasterBank";


export default function Master(){

    return (
        <div className="">
            <h1 className="text-xl font-semibold mb-10">Settings</h1>

            <div className="flex gap-5 items-start">

                <Card className="bg-white rounded-md flex items-center justify-center flex-col gap-5">
                    <InputDataMaster props="bank"/>
                    <ListMaster props="bank"/>
                </Card>

                <Card className="bg-white rounded-md flex items-center justify-center flex-col gap-5">
                    <InputDataMaster props="type"/>
                    <ListMaster props="type"/>
                </Card>

                <Card className="bg-white rounded-md flex items-center justify-center flex-col gap-5">
                    <InputDataMaster props="via"/>
                    <ListMaster props="via"/>
                </Card>

                <Card className="bg-white rounded-md flex items-center justify-center flex-col gap-5">
                    <InputDataMaster props="transaction"/>
                    <ListMaster props="transaction"/>
                </Card>

                
            </div>
            
        </div>
    )
}