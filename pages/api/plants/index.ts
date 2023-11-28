import PlantsApi from '@/lib/plants_api'
import { PlantLite } from '@/types/plants'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlantLite[]>
) {
  const plants = await PlantsApi.getAll();
  res.status(200).json(plants)
}