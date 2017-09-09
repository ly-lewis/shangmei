<template>
    <div class="survey-result">
        <div class="top">
            <p class="score">本次答题:
                <span>8</span>分</p>
        </div>
        <div class="mid">
            <div class="mid-list">
                <p class="time">答题用时</p>
                <p class="res"><span>14/30</span>分钟</p>
            </div>
             <div class="mid-list">
                <p class="time">你答对了</p>
                <p class="res"><span>5/10</span>题</p>
            </div>
        </div>
        <div class="bot">
            <button>查看解析</button>
        </div>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.survey-result {
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-sizing: border-box;
    .top {
        width: 100%;
        height: 422/@pxtorem;
        background: url(../../assets/images/survey-bg.png);
        background-size: contain;
        .score {
            width: 100%;
            padding-top: 320/@pxtorem;
            text-align: center;
            font-size: 28/@pxtorem;
            color: #ffffff;
            span {
                font-size: 42/@pxtorem;
                font-weight: bold;
            }
        }
    }
    .mid {
        padding: 0 40/@pxtorem;
        background: #ffffff;
        .mid-list {
            width: 100%;
            height: 90/@pxtorem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 28/@pxtorem;
            color:#333;
            border-bottom: 1/@pxtorem #eeeeee solid;
            .res {
                span {
                    color: #eb8696
                }
            }
        }
    }
    .bot {
        width: 100%;
        background: #ffffff;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 80/@pxtorem;
        button {
            width: 367/@pxtorem;
            height: 80/@pxtorem;
            background: #4d9407;
            font-size: 32/@pxtorem;
            color:#fff;
            font-weight: bold;
            border-radius: 10/@pxtorem;
        }
    }
}
</style>
<script>
export default {

}
</script>


