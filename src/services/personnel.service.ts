
import { ServiceAPIResponse } from '../../types/service-response'
import { StandardResponse } from '../../types/response'
import axios from 'axios'
import { config } from '../config/index'

const getAll = async (): Promise<ServiceAPIResponse<StandardResponse>> => {
    axios.get(`${config.WIPSOS_URL}/Token`, {
        headers: {
            Identifiant: config.IDENTIFIANT,
            MotDePasse: config.MOTDEPASSE,
        },
      })
        .then((response: any) => {
            console.log('response?.data',response?.data)
            const token = response?.data?.TokenID
            const url = 'http://wipsos-extranet.com/V1/Personnel'
            axios.get(`${url}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    // 'Content-Type': 'application/json; charset=utf-8'        
                },
              })
                .then((response: any) => {
                    console.log('response?.data',response?.status)
                })
                .catch((error: any) => {
                    console.log('Personnsel esrror',error.message)
            
                })
            if(response.status === 200) 
            console.log('TokenID',response?.data?.TokenID)
        })
        .catch((error: any) => {
            console.log('getToken error',error.message)
    
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

export { getAll }
