"use strict";
const common_vendor = require("../../common/vendor.js");
const orderItem = () => "../../components/orderItem.js";
const _sfc_main = {
  components: {
    orderItem
  },
  data() {
    return {
      orderStatus: ["全部", "待拣货", "已拣货", "已完成", "已取消"],
      current: 0,
      allList: [],
      waitPickedList: [],
      pickedList: [],
      finishList: [],
      cancelList: []
    };
  },
  onLoad() {
  },
  methods: {
    search(e) {
    },
    handleTap(index) {
      this.current = index;
    },
    scroll(e) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:58", e);
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _component_orderItem = common_vendor.resolveComponent("orderItem");
  (_easycom_uni_search_bar2 + _component_uni_section + _component_orderItem)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.p({
      placeholder: "请输入订单编号",
      bgColor: "#efefef"
    }),
    c: common_vendor.f($data.orderStatus, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.current === index ? 1 : "",
        c: common_vendor.o(($event) => $options.handleTap(index))
      };
    }),
    d: common_vendor.p({
      list: $data.allList
    }),
    e: $data.current === 0,
    f: common_vendor.p({
      list: $data.waitPickedList
    }),
    g: $data.current === 1,
    h: common_vendor.p({
      list: $data.pickedList
    }),
    i: $data.current === 2,
    j: common_vendor.p({
      list: $data.finishList
    }),
    k: $data.current === 3,
    l: common_vendor.p({
      list: $data.cancelList
    }),
    m: $data.current === 4,
    n: common_vendor.o((...args) => $options.scroll && $options.scroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
