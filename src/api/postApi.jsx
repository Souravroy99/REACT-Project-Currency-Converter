import axios from "axios"

export const apiReq = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/ab436ed6056c786aa92dd09a/pair",
});