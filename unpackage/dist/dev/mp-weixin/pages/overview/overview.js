"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      list: [
        { icon: common_assets.jiaoyi, title: "交易信息", url: "/pages/transaction/transaction" },
        { icon: common_assets.record, title: "出入记录", url: "/pages/entryExit/entryExit" },
        { icon: common_assets.pandian, title: "盘点", url: "/pages/stocking/stocking" },
        { icon: common_assets.store, title: "出库查询", url: "/pages/outbound/outbound" },
        { icon: common_assets.taocan, title: "套餐", url: "/pages/recharge/recharge" },
        { icon: common_assets.kucun, title: "库存查询", url: "/pages/inventoryQuery/inventoryQuery" }
      ]
    };
  },
  methods: {
    change(e) {
    },
    goUrl(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.title),
        c: common_vendor.o(($event) => $options.goUrl(item.url), index),
        d: index,
        e: "46a3d50c-1-" + i0 + ",46a3d50c-0",
        f: common_vendor.p({
          index
        })
      };
    }),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      column: 4,
      highlight: true,
      ["show-border"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46a3d50c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/overview/overview.js.map
