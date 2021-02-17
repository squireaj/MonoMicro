/* eslint-disable linebreak-style */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */

import { createAxiosInstance } from '@/assets/js/axiosService'

// const checkIfUserCanAccessEForm = async (apiToken, id) => {
const getAllRequests = async (token) => {
  const axios = createAxiosInstance(token)

  try {
    const { data } = await axios.get('requests')
    return data
  } catch (error) {
    console.warn(error)
  }
}
const getCustomers = async (token) => {
  const axios = createAxiosInstance(token)
  try {
    const { data } = await axios.get('clients')
    return data
  } catch (error) {
    console.warn(error)
  }
}
const getClientTables = async (token, id) => {
  const axios = createAxiosInstance(token)
  try {
    const { data } = await axios.get(`tables?client_id=${id}`)
    return data
  } catch (error) {
    console.warn(error)
  }
}
const getRequest = async (token, id) => {
  const axios = createAxiosInstance(token)
  try {
    const { data } = await axios.get(`requests/${id}`)
    return data
  } catch (error) {
    console.warn(error)
  }
}
const sendNewRequest = async (token, payload) => {
  const axios = createAxiosInstance(token)
  try {
    const { data } = await axios.post('/requests', payload)
    return data
  } catch (error) {
    console.warn(error)
  }
}

export {
  getAllRequests,
  getCustomers,
  getClientTables,
  getRequest,
  sendNewRequest,
}
