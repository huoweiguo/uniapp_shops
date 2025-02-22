import request from '../utils/http';

// 获取余额
export const getWallet = () => {
  return request({
    url: '/admin-api/app/pay/wallet/get',
    method: 'get'
  });
}

// 获取套餐
export const getTenant = (data) => {
  return request({
    url: '/admin-api/app/user/tenant/get',
    method: 'POST',
    data,
  });
}
