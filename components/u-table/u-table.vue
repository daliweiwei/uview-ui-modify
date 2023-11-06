<template>
  <view class="u-table-scroll">
    <view :class="['u-table', stripe ? 'u-stripe' : '']" :style="[tableStyle]">
      <slot/>
    </view>
  </view>
</template>

<script>
import props from './props.js';

/**
 * Table 表格
 * @description 表格组件一般用于展示大量结构化数据的场景 本组件标签类似HTML的table表格，由table、tr、th、td四个组件组成
 * @tutorial https://www.uviewui.com/components/table.html
 * @example <u-table><u-tr><u-th>学校</u-th </u-tr> <u-tr><u-td>浙江大学</u-td> </u-tr> <u-tr><u-td>清华大学</u-td> </u-tr></u-table>
 */
export default {
  name: 'u-table',
  mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
  data() {
    return {}
  },
  computed: {
    tableStyle() {
      let style = {};
      if (this.width) style.minWidth = `${this.width}px`;
      // style.borderLeft = `solid 1px ${this.borderColor}`;
      // style.borderTop = `solid 1px ${this.borderColor}`;
      style.backgroundColor = this.bgColor;
      return style;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../libs/css/components.scss";

  .u-table-scroll {
    width: 100%;
    overflow-x: auto;
  }

  .u-table {
    width: 100%;
    display: table;
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    //border-collapse: collapse;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #DBDBDB;
  }

  .u-stripe {
    border: none;
    border-radius: unset;
    //border-collapse: unset;

    .u-tr {
      &:nth-child(even) {
        background-color: #DBDBDB;
      }
    }
  }

</style>
