export default {
    props: {
        // 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
        width: {
            type: [Number, String],
            default: 'auto'
        },
        type: {
            type: String,
            default: ''
        }
    }
}
