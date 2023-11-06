<template>
	<view class="u-td" :style="[tdStyle]">
    <slot></slot>
	</view>
</template>

<script>
	import props from './props.js';
	/**
	 * Td 表格中的单元格
	 * @description
	 * @tutorial url
	 * @property {String | Number}
	 * @event {Function}
	 * @example
	 */
	export default {
		name: 'u-td',
		mixins: [uni.$u.mpMixin, uni.$u.mixin,props],
		data() {
			return {
        tdStyle: {

        }
			}
		},
    created() {
      this.parent = false;
    },
    mounted() {
      this.parent = uni.$u.$parent.call(this, 'u-table');
      if (this.parent) {
        // 将父组件的相关参数，合并到本组件
        let style = {};
        // if (this.width != "auto") style.flex = `0 0 ${this.width}`;
        if (this.width != "auto") style.width = `${this.width}`;
        style.textAlign = this.parent.align;
        style.fontSize = this.parent.fontSize + 'px';
        style.padding = this.parent.padding;
        // style.borderBottom = `solid 1px ${this.parent.borderColor}`;
        // style.borderRight = `solid 1px ${this.parent.borderColor}`;
        style.color = this.parent.color;
        if (this.type == 'selection') style.backgroundColor = `#fff`;
        this.tdStyle = style;
      }
    }
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";
  .u-td {
    display: table-cell;
    //@include flex(row);
    //flex-direction: column;
    //flex: 1;
    //justify-content: center;
    vertical-align: middle;
    font-size: 10px;
    color: $u-content-color;
    align-self: stretch;
    box-sizing: border-box;
    height: 100%;
  }
</style>
