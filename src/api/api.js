import axios from "axios";

const api = axios.create({
    baseURL: "https://j-server-portfolio-dg.vercel.app/"
})

//Buscar todos los servicios
export const read = async (url, setData) => {
    const response = await api.get(url)
    setData(response.data)
}