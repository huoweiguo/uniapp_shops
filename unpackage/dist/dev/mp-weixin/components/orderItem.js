"use strict";
const common_vendor = require("../common/vendor.js");
const api_common = require("../api/common.js");
const utils_tools = require("../utils/tools.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "orderItem",
  props: {
    list: {
      type: Object,
      default: {},
      require: true
    }
  },
  data() {
    return {
      timestampToTime: utils_tools.timestampToTime,
      goodsNumber: 1,
      indicatorDots: true,
      duration: 500
    };
  },
  onLoad() {
    common_vendor.index.__f__("log", "at components/orderItem.vue:114", this.list, "list");
  },
  methods: {
    async updateStock(id) {
      const res = await api_common.updateStockCount({
        id,
        warningStock: this.goodsNumber
      });
      if (res.code === 0) {
        common_vendor.index.showToast({
          icon: "success",
          title: "修改库存成功"
        });
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    },
    callPhone(phoneNumber) {
      common_vendor.index.makePhoneCall({
        phoneNumber,
        // 电话号码
        success: function() {
          common_vendor.index.__f__("log", "at components/orderItem.vue:140", "拨打电话成功");
        },
        fail: function(err) {
          common_vendor.index.__f__("log", "at components/orderItem.vue:143", "拨打电话失败：", err);
        }
      });
    },
    async openDoor(uid) {
      const res = await api_common.unlock({ uid });
      if (res.code === 0) {
        common_vendor.index.showToast({
          icon: "none",
          title: "操作成功"
        });
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    },
    changeNumber(value) {
      this.goodsNumber = value;
    },
    tolinks(id) {
      common_vendor.index.navigateTo({
        url: `/pages/salesOrderDetails/salesOrderDetails?id=${id}`
      });
    }
  },
  options: {
    styleIsolation: "shared"
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_number_box2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_number_box = () => "../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_collapse_item = () => "../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.list.track),
    b: common_vendor.t($props.list.no),
    c: common_vendor.t($props.list.logisticName),
    d: common_vendor.o(($event) => $options.tolinks($props.list.id)),
    e: common_assets._imports_0$3,
    f: common_vendor.t($props.list.channelName),
    g: common_vendor.o(($event) => $options.tolinks($props.list.id)),
    h: common_vendor.t($props.list.warehouseName),
    i: common_vendor.t($props.list.address),
    j: common_vendor.t($data.timestampToTime($props.list.orderTime)),
    k: $props.list.deliveryPhone
  }, $props.list.deliveryPhone ? {
    l: common_vendor.t($props.list.deliveryName),
    m: common_vendor.t($props.list.deliveryPhone),
    n: common_vendor.o(($event) => $options.callPhone($props.list.deliveryPhone)),
    o: common_assets._imports_1$1
  } : {}, {
    p: $props.list.remark
  }, $props.list.remark ? {
    q: common_vendor.t($props.list.remark)
  } : {}, {
    r: common_vendor.o(($event) => $options.openDoor($props.list.id)),
    s: common_vendor.t($props.list.totalCount),
    t: common_vendor.t($props.list.totalPrice),
    v: common_vendor.f($props.list.items, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.updateStock(item.productId), item.id),
        b: common_vendor.t(item.productName),
        c: item.thumb,
        d: common_vendor.t(item.productId),
        e: common_vendor.t(item.shelfCode),
        f: common_vendor.t(item.standard),
        g: common_vendor.t(item.productPrice),
        h: common_vendor.t(item.count),
        i: common_vendor.o($options.changeNumber, item.id),
        j: "f8ab5a84-2-" + i0 + ",f8ab5a84-1",
        k: item.id
      };
    }),
    w: $data.indicatorDots,
    x: $data.duration,
    y: common_vendor.p({
      value: $data.goodsNumber
    }),
    z: common_vendor.p({
      title: "展开收起信息",
      ["title-border"]: "false",
      border: false,
      ["show-animation"]: true
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f8ab5a84"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/orderItem.js.map
