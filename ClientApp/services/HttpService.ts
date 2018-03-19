import axios from 'axios';
import { EventBus } from './EventBus';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers = {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        EventBus.$emit('auth-expired');
        return Promise.resolve(error);
    }
    // Do something with response error
    return Promise.reject(error);
});

export default class HttpService {

    private static baseUrl: string = (<HTMLInputElement>document.getElementById("API_URL")).value;

    /**
     * This function does a post request to the API
     * @param edge 
     * @param body 
     * @returns Promise
     */
    public static doPostRequest<T>(edge: string, body: T): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(`${this.baseUrl}/${edge}`, body)
                .then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    /**
     * This function does a put request to the API
     * @param edge 
     * @param body 
     * @returns Promise
     */
    public static doPutRequest<T>(edge: string, body: T): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.put(`${this.baseUrl}/${edge}`, body)
                .then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    /**
     * This function does a get request to the API
     * @param edge
     * @returns Promise
     */
    public static doGetRequest<T>(edge: string): Promise<any> {
        console.log(this.baseUrl);
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}/${edge}`)
                .then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    /**
     * This function sends a delete request to the API
     * @param edge 
     * @returns Promise
     */
    public static doDeleteRequest(edge: string): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.baseUrl}/${edge}`).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

}