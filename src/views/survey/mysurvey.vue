<template>
    <div class="myvotes">
        <div class="topbar">
            <div class="now">正在进行</div>
            <div class="end">结束关闭</div>
        </div>
        <div class="content">
            <ul class="content-list">
                <router-link to="surveyDetail" tag="li">
                    <div class="top">
                        <p class="name">调研答题测试</p>
                        <p class="count">
                            <span>20</span>题</p>
                    </div>
                    <p class="bot">截止日期&nbsp;:&nbsp;2018-10-23</p>
                </router-link>
                <router-link to="surveyDetail" tag="li">
                    <div class="top">
                        <p class="name">调研答题测试</p>
                        <p class="count">
                            <span>20</span>题</p>
                    </div>
                    <p class="bot">截止日期&nbsp;:&nbsp;2018-10-23</p>
                </router-link>
                  <router-link to="surveyDetail" tag="li">
                    <div class="top">
                        <p class="name">调研答题测试</p>
                        <p class="count">
                            <span>20</span>题</p>
                    </div>
                    <p class="bot">截止日期&nbsp;:&nbsp;2018-10-23</p>
                </router-link>
               <router-link to="surveyDetail" tag="li">
                    <div class="top">
                        <p class="name">调研答题测试</p>
                        <p class="count">
                            <span>20</span>题</p>
                    </div>
                    <p class="bot">截止日期&nbsp;:&nbsp;2018-10-23</p>
                </router-link>
            </ul>
        </div>
        <footerbar></footerbar>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.myvotes {
    width: 100%;
    min-height: 1200/@pxtorem;
    .topbar {
        width: 100%;
        height: 90/@pxtorem;
        background: #ffffff;
        display: flex;
        margin-bottom: 20/@pxtorem;
        .now {
            width: 50%;
            height: 100%;
            line-height: 90/@pxtorem;
            text-align: center;
            font-size: 30/@pxtorem;
            color: #4d9407;
            background: #f5ffec;
            box-sizing: border-box;
            border-bottom: 4/@pxtorem #4d9407 solid
        }
        .end {
            width: 50%;
            height: 100%;
            line-height: 90/@pxtorem;
            text-align: center;
            font-size: 30/@pxtorem;
            box-sizing: border-box;
        }
    }
    .content {
        box-sizing: border-box;
        background: #ffffff;
        padding: 0 30/@pxtorem;
        .content-list {
            width: 100%;
            height: auto;
            li {
                width: 100%;
                height: 120/@pxtorem;
                overflow: hidden;
                border-bottom: 1/@pxtorem #eeeeee solid;
                .top {
                    display: flex;
                    justify-content: space-between;
                    font-size: 28/@pxtorem;
                    color: #333;
                    margin-top: 25/@pxtorem;
                    .count {
                        span {
                            color: #eb8696;
                        }
                    }
                }
                .bot {
                    font-size: 24/@pxtorem;
                    color: #999;
                    margin-bottom: 25/@pxtorem;
                }
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


