import axiosInstance from '../service/axios';

export const getTodos = () => ({
    type: 'GET_TODOS',
    payload:  axiosInstance({
      method:'GET',
      url:`/todos`,
      headers: {
        'content-type': 'application/json',
      }
    })
  });