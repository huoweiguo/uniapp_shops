import request from '../utils/http';

// 充值金额选项
export const getWallet = (data) => {
  return request({
    url: '/admin-api/app/pay/wallet-recharge/create',
    method: 'POST',
    data,
  });
}

// 立即支付
export const paySubmit = (data) => {
  return request({
    url: '/app-api/pay/order/submit',
    method: 'POST',
    data,
  });
}

// 仓库列表
export const warehouseList = () => {
  return request({
    url: '/admin-api/erp/warehouse/simple-list',
    method: 'GET'
  });
}

// 订单列表
export const orderList = (data) => {
  return request({
    url: '/admin-api/erp/sale-order/page',
    method: 'GET',
    data,
  });
}

// 订单详情
export const orderInfo = (data) => {
  return request({
    url: '/admin-api/erp/sale-order/get',
    method: 'GET',
    data,
  });
}

// 开门
export const unlock = (data) => {
  return request({
    url: '/admin-api/erp/warehouse/unlock',
    method: 'GET',
    data,
  });
}

// 修改库存
export const updateStockCount = (data) => {
  return request({
    url: '/admin-api/erp/stock/updateStockCount',
    method: 'POST',
    data,
  });
}

// 出入记录
export const entryRecord = (data) => {
  return request({
    url: '/admin-api/erp/warehouse-entry-record/page',
    method: 'GET',
    data,
  });
}

// 盘点单列表
export const stockCheck = (data) => {
  return request({
    url: '/admin-api/erp/stock-check/page',
    method: 'POST',
    data,
  });
}

// 出库商品列表
export const stockRecord = (data) => {
  return request({
    url: '/admin-api/erp/stock-record/page',
    method: 'POST',
    data,
  });
}

// 版本订阅套餐
export const tenantPackage = () => {
  return request({
    url: '/admin-api/system/tenant-package/get-simple-list',
    method: 'GET'
  });
}

// 库存查询列表
export const stockQuery = (data) => {
  return request({
    url: '/admin-api/erp/stock/page',
    method: 'GET',
    data,
  });
}

// 商品列表
export const productList = (data) => {
  return request({
    url: '/admin-api/erp/product/page',
    method: 'GET',
    data,
  });
}

// 商品分类列表
export const categoryList = (data) => {
  return request({
    url: '/admin-api/erp/product-category/list',
    method: 'GET',
    data,
  });
}

// 商品详情
export const productInfo = (id) => {
  return request({
    url: `/admin-api/erp/product/get?id=${id}`,
    method: 'GET'
  });
}


// 新增商品
export const productAdd = (data) => {
  return request({
    url: '/admin-api/erp/product/create',
    method: 'POST',
    data,
  });
}


// 修改商品
export const productUpdate = (data) => {
  return request({
    url: '/admin-api/erp/product/update',
    method: 'PUT',
    data,
  });
}

// 经营概况数据统计
export const saleStatistics = (data) => {
  return request({
    url: '/admin-api/erp/sale-statistics/time-summary',
    method: 'POST',
    data,
  });
}

// 图片上传
export const uploadImage = (data) => {
  return request({
    url: '/admin-api/infra/file/upload',
    method: 'POST',
    data,
  });
}

// 出库，提交
export const stockOutSubmit = (data) => {
	return request({
		url: '/app-api/app/sale-order/batch',
		method: 'PUT',
		data
	})
}

// 创建库存盘点单
export const stockCheckCreate = (data) => {
	return request({
		url: '/admin-api/erp/stock-check/create',
		method: 'POST',
		data
	})
}







