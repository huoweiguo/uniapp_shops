import request from '../utils/http';

export const login = (data) => {
  return request({
    url: '/admin-api/system/auth/phone/login',
    method: 'POST',
    data,
  });
}