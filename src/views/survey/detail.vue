<template>
    <div class="answerdetail">
        <div class="activity">
            <div class="choice">
                <p class="title">1、【选择题】题目名称</p>
                <ul class="activity-list">
                    <li>
                        <p>A、答题一</p>
                        <input type="checkbox" name="" id="">
                    </li>
                    <li>
                        <p>A、答题二</p>
                        <input type="checkbox" name="" id="">
                    </li>
                    <li>
                        <p>A、答题三</p>
                        <input type="checkbox" name="" id="">
                    </li>
                </ul>
            </div>
            <div class="choice">
                <p class="title">2、【选择题】题目名称</p>
                <ul class="activity-list">
                    <li>
                        <p>A、答题一</p>
                        <input type="checkbox" name="" id="">
                    </li>
                    <li>
                        <p>A、答题二</p>
                        <input type="checkbox" name="" id="">
                    </li>
                    <li>
                        <p>A、答题三</p>
                        <input type="checkbox" name="" id="">
                    </li>
                </ul>
            </div>
            <div class="filling">
                <p class="title">3、【填空题】题目名称</p>
                <div class="content">
                    <input type="text" placeholder="填写答案">
                </div>
            </div>
            <div class="question">
                <p class="title">4、【问答题】题目名称</p>
                <div class="content">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
              <div class="question">
                <p class="title">5、【问答题】题目名称</p>
                <div class="content">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
        <div class="submit">
            <router-link to="surveyResult" tag="button">
                提交
            </router-link>
        </div>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.answerdetail {
    width: 100%;
    .activity {
        width: 100%;
        height: auto;
        background: #ffffff;
        margin-bottom: 108/@pxtorem;
        .choice {
            width: 100%;
            .title {
                width: 100%;
                padding: 0 30/@pxtorem;
                height: 90/@pxtorem;
                line-height: 90/@pxtorem;
                font-size: 28/@pxtorem;
                color: #333;
                font-weight: bold;
                border-bottom: 1/@pxtorem #eeeeee solid;
            }
            .activity-list {
                width: 100%;
                li {
                    width: 100%;
                    height: 90/@pxtorem;
                    padding: 0 30/@pxtorem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1/@pxtorem #eeeeee solid;
                    p {
                        font-size: 28/@pxtorem;
                        color: #666;
                    }
                    input {
                        width: 37/@pxtorem;
                        height: 37/@pxtorem;
                        background: #ffffff;
                    }
                }
            }
        }
        .filling {
            width: 100%;
            height: auto;
            border-bottom: 1/@pxtorem #eeeeee solid;
            .title {
                width: 100%;
                padding: 0 30/@pxtorem;
                height: 90/@pxtorem;
                line-height: 90/@pxtorem;
                font-size: 28/@pxtorem;
                color: #333;
                font-weight: bold;
                border-bottom: 1/@pxtorem #eeeeee solid;
            }
            .content {
                margin-left: 80/@pxtorem;
                height: 90/@pxtorem;
                border-bottom: 1/@pxtorem #eeeeee solid;
                margin-bottom: 40/@pxtorem;
                padding-left: 30/@pxtorem;
                input {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    font-size: 28/@pxtorem;
                    color: #bbbbbb;
                }
            }
        }
        .question {
            width: 100%;
            .title {
                width: 100%;
                padding: 0 30/@pxtorem;
                height: 90/@pxtorem;
                line-height: 90/@pxtorem;
                font-size: 28/@pxtorem;
                color: #333;
                font-weight: bold;
            }
            .content {
                box-sizing: border-box;
                margin-right: 30/@pxtorem;
                margin-left: 70/@pxtorem;
                border-bottom: 1/@pxtorem #eeeeee solid;
                padding-bottom: 30/@pxtorem; 
                textarea {
                    width: 100%;
                    height: 170/@pxtorem;
                    background: #eeeeee;
                    border-radius: 10/@pxtorem;
                }
            }
        }
    }
    .submit {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
            width: 367/@pxtorem;
            height: 80/@pxtorem;
            line-height: 80/@pxtorem;
            text-align: center;
            background: #4d9407;
            color: #ffffff;
            font-size: 32/@pxtorem;
            font-weight: bold;
            border-radius: 10/@pxtorem;
            margin-bottom: 30/@pxtorem;
        }
    }
}
</style>
<script>
export default {

}
</script>


