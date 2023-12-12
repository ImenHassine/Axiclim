import axios from 'axios'
import { config } from '../config/index'

import { ServiceAPIResponse } from '../../types/service-response'
import { StandardResponse } from '../../types/response'

const getToken = async (): Promise<ServiceAPIResponse<StandardResponse>> => {
  /* fetch data here */
  axios.get(`${config.WIPSOS_URL}/Token`, {
    headers: {
        Identifiant: config.IDENTIFIANT,
        MotDePasse: config.MOTDEPASSE,
    },
  })
    .then((response: any) => {
        if(response.status === 200) 
        console.log('TokenID',response?.data?.TokenID)
    })
    .catch((error: any) => {
        console.log('getToken error',error)

    })

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

export { getToken }

