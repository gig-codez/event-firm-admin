// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { FindeWithId, DeleteWithId } from "../../../shared/data/e-commerce/productdata"


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const {id} = req.query
    const method = req.method
    let result
    switch (method) {
        case "GET":
            result = await FindeWithId(Number(id))
            res.json(result)
            break;
        case "DELETE":
            result = await DeleteWithId(Number(id))
            res.json(result)
            break;
        
        default:
            res.status(404).end(`Method ${method} not supported`)
            break;
    }

}
