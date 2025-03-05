import request from '../utils/http';

export const login = (data) => {
  return request({
    url: '/admin-api/system/auth/login',
    method: 'POST',
    data,
  });
}