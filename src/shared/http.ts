import axios, { type AxiosError } from 'axios'

const http = axios.create()

http.interceptors.request.use((config) => {
  config.headers['user-agent'] = 'Dart/3.1 (dart:io)'
  config.headers.cookie = 'Culture=ru-RU;'
  return config
})

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      throw new Error('UNAUTHORIZED')
    }

    return Promise.reject(error)
  },
)

export default http
