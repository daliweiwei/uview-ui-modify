<template>
	<view :class="['u-tr', stripe ? 'u-tr-stripe' : '']">
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
		name: 'u-tr',
		mixins: [uni.$u.mpMixin, uni.$u.mixin,props],
		data() {
			return {
        stripe:false,
			}
		},
    created() {
      this.parent = false;
    },
    mounted() {
      this.parent = uni.$u.$parent.call(this, 'u-table');
      if (this.parent) {
        this.stripe = this.parent.stripe
      }
    }
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";
  .u-tr {
    //@include flex(row);
    display: table-row;
    transition: all 0.3s;
    box-sizing: border-box;
    border-top: 1px solid #DBDBDB;
  }
  .u-tr-stripe{
    &:nth-child(even) {
      background-color: #DBDBDB;
      //background-color: #fafafa;
    }
  }
</style>
