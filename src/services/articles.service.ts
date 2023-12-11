import { Request } from 'express'

import { ServiceAPIResponse } from '../../types/service-response'
import { StandardResponse } from '../../types/response'

const getAll = async (): Promise<ServiceAPIResponse<StandardResponse>> => {
  /* fetch data here */
  return {
    statusCode: 200,
    body: {
      status: 'success',
      data: [],
      message: 'Retrieve article',
      code: 2000,
    }
  }
}

const getById = async (req: Request): Promise<ServiceAPIResponse<StandardResponse>> => {

  return {
    statusCode: 200,
    body: {
      status: 'success',
      data: null,
      message: `Article title ${req.params?.id}`,
      code: 2000,
    }
  }
}

export { getAll, getById }
