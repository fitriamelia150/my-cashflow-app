import Card from "@/components/elements/Card";
import InputMasterBank from "@/components/fragments/master/InputMasterBank";
import InputMasterTransaction from "@/components/fragments/master/InputMasterTransaction";
import InputMasterType from "@/components/fragments/master/InputMasterType";
import InputMasterVia from "@/components/fragments/master/InputMasterVia";
import Listbank from "@/components/fragments/master/ListMasterBank";


export default function Master(){

    return (
        <div className="bg-white pl-10 pt-10 pb-10">
            <h1 className="text-xl font-semibold mb-10">Settings</h1>

            <div className="flex gap-5">

                <Card className="bg-white rounded-md flex items-center justify-center flex-col">
                    <InputMasterBank/>
                    <Listbank/>
                </Card>

                <Card className="bg-white rounded-md flex items-center justify-center flex-col">
                    <InputMasterType/>
                    <h1>apaaasa</h1>
                </Card>

                <Card className="bg-white rounded-md flex items-center justify-center flex-col">
                    <InputMasterVia/>
                    <h1>apaaasa</h1>
                </Card>

                <Card className="bg-white rounded-md flex items-center justify-center flex-col">
                    <InputMasterTransaction/>
                    <h1>apaaasa</h1>
                </Card>

                
            </div>
            
        </div>
    )
}