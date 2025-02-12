import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

//read
export const GET = async (req: NextRequest) => {
    try {
        const data = await prisma.tbl_master_via.findMany();
        
        const res = NextResponse.json({data});
        res.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        
        return res;

    } catch (error) {
        console.error('Error fetching master type:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch data',
        }, { status: 500});
    }
};

//create
export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        const type = data;

        if(!data) {
            console.log("No data received");
            return NextResponse.json({message: 'No data received'}, {status: 400})
        }

        const post = await prisma.tbl_master_via.create({
            data: {
                description: type
            }
        });

        return NextResponse.json(post, {status: 201})

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
};

//update

//delete