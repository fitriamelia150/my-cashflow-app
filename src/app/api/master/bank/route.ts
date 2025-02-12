import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
    try {
        const data = await prisma.tbl_master_bank.findMany();

        const res = NextResponse.json({ data });
        res.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        
        return res;
        
    } catch (error) {
        console.error('Error fetching master bank:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch data',
        }, { status: 500 });
    }
};

export const POST = async (req: NextRequest) => {
    try{
        const data = await req.json();
        const bank_name = data;
        
        if(!data) {
            console.log("No data received");
            return NextResponse.json({message: 'No data received'}, {status: 400})
        }

        const post = await prisma.tbl_master_bank.create({
            data: {
                mst_bank_name: bank_name
            }
        })

        return NextResponse.json(post, {status: 201})
    }catch(error){
        console.error('Error:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
}