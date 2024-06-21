import React from "react";

export async function GET(req: Request){
    try{
        const data = await fetch('http://localhost:4000/reports')
        const response = await data.json()
        if(response.status === 200){
            return {
                status: 200,
                body: response
            }
        }
        else{
            return {
                status: 500,
                body: response
            }
        }
    }catch(e){
        return {
            status: 500,
            body: e
        }
    }
}