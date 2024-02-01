import axios from 'axios';
const axiosClient = axios.create({
	baseURL:'http://localhost:8080/'
});
  export function getRequest(URL,payload) {
    return axiosClient.get(`/${URL}`,payload).then(response => response);
  }
  
  export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
  }
  
  export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
  }
  
  export function deleteRequest(URL,payload) {
    return axiosClient.delete(`/${URL}`,payload).then(response => response);
  }
  export function putRequest(URL,payload) {
    return axiosClient.put(`/${URL}`,payload).then(response => response);
  }
