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
export const warehouseList = (data) => {
  return request({
    url: '/admin-api/erp/warehouse/simple-list',
    method: 'GET',
    data
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
    method: 'PUT',
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

// 商品单位
export const getProductUnit = () => {
  return request({
    url: '/admin-api/erp/product-unit/simple-list',
    method: 'GET'
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

// 删除商品
export const deleteProduct = (data) => {
  return request({
    url: `/admin-api/erp/product/delete?id=${data}`,
    method: 'DELETE'
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

// 销售统计
export const saleStatistics = (data) => {
  return request({
    url: '/admin-api/erp/sale-statistics/time-summary',
    method: 'GET',
    data,
  });
}

// 采购统计
export const purchaseStatistics = (data) => {
  return request({
    url: '/admin-api/erp/purchase-statistics/time-summary',
    method: 'GET',
    data,
  });
}

// 销售汇总
export const saleSummary = (data) => {
  return request({
    url: '/admin-api/erp/sale-statistics/summary',
    method: 'GET',
    data,
  });
}

// 采购汇总
export const purchaseSummary = (data) => {
  return request({
    url: '/admin-api/erp/purchase-statistics/summary',
    method: 'GET',
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
export const stockOutCreate = (data) => {
	return request({
		url: '/admin-api/erp/stock-out/create',
		method: 'POST',
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


// 活动商品库存
export const getStockByGoods = (data) => {
	return request({
		url: '/admin-api/erp/stock/get',
		method: 'GET',
		data
	})
}







