"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/goods/goods.js";
  "./pages/customer/customer.js";
  "./pages/overview/overview.js";
  "./pages/my/my.js";
  "./pages/goodsDetail/goodsDetail.js";
  "./pages/transaction/transaction.js";
  "./pages/recharge/recharge.js";
  "./pages/deposit/deposit.js";
  "./pages/entryExit/entryExit.js";
  "./pages/salesOrderDetails/salesOrderDetails.js";
  "./pages/outbound/outbound.js";
  "./pages/stocktakingDetail/stocktakingDetail.js";
  "./pages/inventoryQuery/inventoryQuery.js";
  "./pages/businessSituation/businessSituation.js";
  "./pages/createGoods/createGoods.js";
  "./pages/login/login.js";
  "./pages/stocking/stocking.js";
  "./pages/stockingList/stockingList.js";
  "./pages/changeMall/changeMall.js";
  "./pages/selectProduct/selectProduct.js";
  "./pages/selectStore/selectStore.js";
  "./pages/searchOrder/searchOrder.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
