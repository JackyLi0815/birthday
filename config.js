// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给华夏雷沣商学院-吴宜家",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的吴总",  // 同上...
        "今天是你的生日",
        "小小小小小李衷心地祝福您生日快乐！",
        "您平时的支持对我们每个人都意义非凡。",
        "您以明智的决策，",
        "不懈的努力和无私的奉献",
        "为公司打造了美好的明天。",
        "愿您在新的一岁里，",
        "事业更上一层楼，",
        "YAMI~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "再创辉煌": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "吴总过生日咯",
        play: "点击播放音乐",
        bannar_coming: "请吴总继续点击",
        balloons_flying: "唉？？好像少点东西",
        cake_fadein: "生日蛋糕呢？",
        light_candle: "蜡烛点上啊！",
        wish_message: "祝：吴宜家生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
