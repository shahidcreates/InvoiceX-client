import axios from "axios";

export const saveInvoice = (baseUrl,payLoad) => {
    return axios.post(`${baseUrl}/invoices`,payLoad);
}

export const getAllInvoices = (baseUrl) =>{
    return axios.get(`${baseUrl}/invoices`);
}

export const deleteInvoice = (baseUrl,id) => {
    return axios.delete(`${baseUrl}/invoices/${id}`);
}

export const sendInvoice = (baseUrl,formData) => {
    return axios.post(`${baseUrl}/invoices/sendinvoice`,formData);
}