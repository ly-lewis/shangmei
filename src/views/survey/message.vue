<template>
    <div class="message">
        <div class="message-in">
            <div class="message-box">
                <p class="tit">【调研答题】新产品调研活动</p>
                <div class="content">
                    <img src="../../assets/images/bgimg.png" alt="">
                    <p>新产品调研活动新产品调研活动新产品调研活动新产品调研活动新产品调研活动新产品调研活动新产品调研活动</p>
                </div>
                <div class="all">
                    <p>查看全部</p>
                    <img src="../../assets/images/arrow-right.png" alt="">
                </div>
            </div>
            <div class="message-box">
                <p class="tit">【调研答题】新产品调研活动</p>
                <div class="content">
                    <img src="../../assets/images/bgimg.png" alt="">
                    <p>新产品调研活动新产品调研活动新产品调研活动新产品调研活动新产品调研活动新产品调研活动新产品调研活动</p>
                </div>
                <div class="all">
                    <p>查看全部</p>
                    <img src="../../assets/images/arrow-right.png" alt="">
                </div>
            </div>
        </div>
        <footerbar></footerbar>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.message {
    width: 100%;
    padding-top: 30/@pxtorem;
    .message-in {
        width: 100%;
        padding: 0 30/@pxtorem;
    }
    .message-box {
        width: 100%;
        height: 590/@pxtorem;
        background: #ffffff;
        border-radius: 10/@pxtorem;
        padding: 0 25/@pxtorem;
        margin-bottom: 30/@pxtorem;
        .tit {
            width: 100%;
            height: 100/@pxtorem;
            font-size: 32/@pxtorem;
            font-weight: bold;
            color: #333;
            line-height: 100/@pxtorem;
        }
        .content {
            width: 100%;
            border-bottom: 1/@pxtorem #eeeeee solid;
            padding-bottom: 36/@pxtorem;
            img {
                width: 100%;
                height: 100%;
                margin-bottom: 32/@pxtorem;
            }
            p {
                font-size: 26/@pxtorem;
                color: #666;
            }
        }
        .all {
            width: 100%;
            height: 80/@pxtorem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
                color: #333;
            }
            img {
                width: 15/@pxtorem;
                height: 27/@pxtorem;
            }
        }
    }
}
</style>
<script>
import footerbar from '../../components/survey/footerbar'
export default {
    data() {
        return {

        }
    },
    components: {
        footerbar
    }
}
</script>


