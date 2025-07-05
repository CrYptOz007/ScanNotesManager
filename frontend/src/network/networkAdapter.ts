import axios, { type AxiosInstance, type AxiosRequestHeaders } from "axios";

export default function getNetworkAdapter(): AxiosInstance {
    const headers: AxiosRequestHeaders = {} as AxiosRequestHeaders;

    const controller = axios.create({
        baseURL: "/api/v1",
        headers,
        withCredentials: true,
        responseType: "json",
    });

    return controller;
}
