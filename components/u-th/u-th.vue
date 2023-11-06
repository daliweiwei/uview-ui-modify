<template>
  <view class="u-th" :style="[thStyle]">
    <slot></slot>
  </view>
</template>

<script>
import props from './props.js';
/**
 * Tr
 * @description
 * @tutorial url
 * @property {String}
 * @event {Function}
 * @example
 */
export default {
  name: 'u-th',
  mixins: [uni.$u.mpMixin, uni.$u.mixin,props],
  data() {
    return {
      thStyle: {},
      stripe:false,
    }
  },
  created() {
    this.parent = false;
  },
  mounted() {
    this.parent = uni.$u.$parent.call(this, 'u-table');
    if (this.parent) {
      // 将父组件的相关参数，合并到本组件
      this.stripe = this.parent.stripe;
      this.thStripe = this.parent.thStripe;
      let style = {};
      // if (this.width) style.flex = `0 0 ${this.width}`;
      if (this.width) style.width = `${this.width}px`;
      style.textAlign = this.parent.align;
      style.padding = '5px 3px';
      // if (this.type !== 'selection') style.borderTop = `solid 1px ${this.parent.borderColor}`;
      // if (this.type !== 'selection') style.borderBottom = `solid 1px ${this.parent.borderColor}`;
      // if (this.type !== 'selection') style.borderRight = `solid 1px ${this.parent.borderColor}`;
      if (this.type !== 'selection' && (this.stripe || this.thStripe)) style.backgroundColor = `rgba(107, 207, 201, 0.3)`;
      Object.assign(style, this.parent.thStyle);
      this.thStyle = style;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.u-th {
  display: table-cell;
  //@include flex(row);
  font-size: 14px;
  color: $u-th-color;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
}
</style>
