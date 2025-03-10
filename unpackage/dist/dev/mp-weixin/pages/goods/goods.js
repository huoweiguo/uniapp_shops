"use strict";
const common_vendor = require("../../common/vendor.js");
const api_common = require("../../api/common.js");
const _sfc_main = {
  data() {
    return {
      goodsId: "",
      pageReqVO: {
        pageNo: 1,
        pageSize: 10,
        name: "",
        categoryId: ""
      },
      listReqVO: {
        name: "",
        status: ""
      },
      status: "more",
      total: 0,
      goodsList: [],
      dataTree: [],
      timer: null
    };
  },
  onLoad() {
    this.getCategoryList();
    this.getGoodsList();
  },
  methods: {
    search(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.pageReqVO.name = e;
        this.goodsList = [];
        this.getGoodsList();
      }, 200);
    },
    async getCategoryList() {
      const res = await api_common.categoryList(this.listReqVO);
      if (res.code === 0) {
        let data = res.data || [];
        data.map((item) => {
          this.dataTree.push({
            text: item.name,
            value: item.id
          });
        });
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    },
    async getGoodsList() {
      const res = await api_common.productList(this.pageReqVO);
      this.status = "loading";
      if (res.code === 0) {
        this.goodsList = [...this.goodsList, ...res.data.list];
        this.total = res.data.total;
        if (this.pageReqVO.pageNo * this.pageReqVO.pageSize >= this.total) {
          this.status = "noMore";
        } else {
          this.status = "more";
        }
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    },
    toLinks(id) {
      common_vendor.index.navigateTo({
        url: `/pages/goodsDetail/goodsDetail?id=${id}`
      });
    },
    scrolltolower() {
      if (this.pageReqVO.pageNo * this.pageReqVO.pageSize < this.total) {
        this.pageReqVO.pageNo++;
        this.getGoodsList();
      }
    },
    onchange(e) {
      if (e.detail.value.length > 0) {
        this.pageReqVO.categoryId = e.detail.value[0].value;
      } else {
        this.pageReqVO.categoryId = "";
      }
      this.pageReqVO.pageNo = 1;
      this.goodsList = [];
      this.getGoodsList();
    },
    editGoods({
      id
    }) {
      common_vendor.index.navigateTo({
        url: `/pages/createGoods/createGoods?id=${id}`
      });
    },
    async dialogConfirm() {
      const res = await api_common.deleteProduct(this.goodsId);
      if (res.code === 0) {
        const idx = this.goodsList.findIndex((item) => item.id === this.goodsId);
        this.goodsList.splice(idx, 1);
        common_vendor.index.showToast({
          icon: "none",
          title: "删除商品成功"
        });
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    },
    async deleteGoods({ id }) {
      this.goodsId = id;
      this.$refs.alertDialog.open();
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_search_bar2 + _component_uni_section + _easycom_uni_data_picker2 + _easycom_uni_icons2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_uni_load_more2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_data_picker + _easycom_uni_icons + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_uni_load_more + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($data.pageReqVO.name),
    b: common_vendor.o($options.search),
    c: common_vendor.p({
      placeholder: "请输入商品名称",
      bgColor: "#efefef"
    }),
    d: common_vendor.o($options.onchange),
    e: common_vendor.o(($event) => $data.pageReqVO.categoryId = $event),
    f: common_vendor.p({
      placeholder: "全部类别",
      ["popup-title"]: "选择类别",
      localdata: $data.dataTree,
      modelValue: $data.pageReqVO.categoryId
    }),
    g: common_vendor.p({
      type: "plus",
      size: "20"
    }),
    h: common_vendor.f($data.goodsList, (item, k0, i0) => {
      return {
        a: item.pic,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.salePrice && item.salePrice.toFixed(2)),
        d: common_vendor.t(item.purchasePrice && item.purchasePrice.toFixed(2)),
        e: common_vendor.t(item.categoryName),
        f: common_vendor.o(($event) => $options.editGoods({
          position: "right",
          id: item.id,
          content: {
            text: "编辑"
          }
        }), item.id),
        g: common_vendor.o(($event) => $options.deleteGoods({
          position: "right",
          id: item.id,
          content: {
            text: "删除"
          }
        }), item.id),
        h: "7e2880f6-5-" + i0 + "," + ("7e2880f6-4-" + i0),
        i: "7e2880f6-4-" + i0,
        j: item.id,
        k: common_vendor.o(($event) => $options.toLinks(item.id), item.id)
      };
    }),
    i: common_vendor.p({
      status: $data.status
    }),
    j: common_vendor.o((...args) => $options.scrolltolower && $options.scrolltolower(...args)),
    k: common_vendor.o($options.dialogConfirm),
    l: common_vendor.p({
      type: "warning",
      cancelText: "取消",
      confirmText: "确定",
      title: "警告",
      content: "确定要删除该商品吗？"
    }),
    m: common_vendor.sr("alertDialog", "7e2880f6-7"),
    n: common_vendor.p({
      type: "dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7e2880f6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/goods.js.map
