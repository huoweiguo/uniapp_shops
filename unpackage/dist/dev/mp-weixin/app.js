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
  "./pages/entryExit/entryExit.js";
  "./pages/salesOrderDetails/salesOrderDetails.js";
  "./pages/outbound/outbound.js";
  "./pages/inventoryQuery/inventoryQuery.js";
  "./pages/businessSituation/businessSituation.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
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
