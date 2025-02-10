import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

//read
export const GET = async (req: NextRequest) => {
    try {
        const data_transactions = await prisma.tbl_transaction.findMany();

        const res = NextResponse.json({ data_transactions });
        res.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        
        return res;
        
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch data',
        }, { status: 500 });
    }
};

//create
export const POST = async (req: NextRequest) => {
    try {
        // Log request headers to ensure proper Content-Type
        console.log('Request Headers:', req.headers);

        // Parse JSON data from request body
        const data = await req.json();
        console.log('Received Data:', data); // Log parsed data

        if (!data) {
            console.error("No data received");
            return NextResponse.json({ message: 'No data received' }, { status: 400 });
        }

        const { trxDate, trxBankFrom, trxType, trxName, trxVia, trxAmount, trxNotes } = data;

        if (!trxDate || !trxBankFrom || !trxType || !trxName || !trxVia || !trxAmount || !trxNotes) {
            console.error('Missing required fields:', data);
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const parsedAmount = parseFloat(trxAmount);
        if (isNaN(parsedAmount)) {
            console.error('Invalid trxAmount:', trxAmount);
            return NextResponse.json({ message: 'Invalid amount' }, { status: 400 });
        }

        // Create the record in the database
        const post = await prisma.tbl_transaction.create({
            data: {
                userId: Math.floor(Math.random() * 1000), // Example userId
                trx_date: new Date(trxDate).toISOString(),
                trx_amount: parsedAmount,
                trx_name: trxName,
                trx_notes: trxNotes,
                trx_bank_from: trxBankFrom,
                trx_type: trxType,
                trx_via: trxVia,
            }
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
};