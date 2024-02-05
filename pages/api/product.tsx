// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { Productdata } from "../../shared/data/e-commerce/productdata"


export default async function handler(req :NextApiRequest, res :NextApiResponse) {
  const result = await Productdata
  res.json(result)
}