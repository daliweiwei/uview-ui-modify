export default {
    props: {
        width: {
            type: [Number, String],
            default: ''
        },
        stripe: {
            type: Boolean,
            default: false
        },
        thStripe: {
            type: Boolean,
            default: false
        },
        borderColor: {
            type: String,
            default: '#e4e7ed'
        },
        align: {
            type: String,
            default: 'center'
        },
        // td的内边距
        padding: {
            type: String,
            default: '5px 3px'
        },
        // 字体大小
        fontSize: {
            type: [String, Number],
            default: 12
        },
        // 字体颜色
        color: {
            type: String,
            default: '#606266'
        },
        // th的自定义样式
        thStyle: {
            type: Object,
            default () {
                return {}
            }
        },
        // table的背景颜色
        bgColor: {
            type: String,
            default: '#ffffff'
        }
    }
}
