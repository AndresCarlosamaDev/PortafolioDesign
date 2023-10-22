import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:5173/"
    baseURL: "https://j-server-portfolio-dg.vercel.app/"
})

const serverURL = "https://j-server-portfolio-dg.vercel.app/"


//Buscar todos los servicios
export const read = async (url, setData) => {
    const response = await api.get(url)
    setData(response.data)
}

export const create = (url, customerObj) => {
    const newCustomer = `${serverURL}${url}`
    return axios.post(newCustomer, customerObj)
}