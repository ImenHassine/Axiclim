import axios from 'axios'
import { config } from './index'

const baseConfig = {
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
}

const restApi = axios.create({
  ...baseConfig,
  baseURL: config.WIPSOS_URL,
})

export { restApi }