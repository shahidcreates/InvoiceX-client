import axios from "axios";

export const saveInvoice = (baseUrl,payLoad) => {
    return axios.post(`${baseUrl}/invoices`,payLoad);
}