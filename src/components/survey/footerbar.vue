<template>
    <div class="contact-footbar">
        <ul class="contact-list">
            <router-link to="mySurvey" tag="li" class="footer-list" active-class="active1">
                <img src="../../assets/images/survey-1.png" alt="">
                <p>我的调研</p>
            </router-link>
            <router-link to="surveyMessage" tag="li" class="footer-list" active-class="active2">
                <img src="../../assets/images/message-on.png" alt="">
                <p>消息</p>
            </router-link>
        </ul>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.contact-footbar {
    width: 100%;
    height: 96/@pxtorem;
    ul {
        width: 100%;
        height: 96/@pxtorem;
        background: #ffffff;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        padding-top: 12/@pxtorem;
        padding-bottom: 11/@pxtorem;
        .footer-list {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
             :nth-child(1) {
                color: #4d9407;
            }
            img {
                width: 52/@pxtorem;
                height: 41/@pxtorem;
            }
            p {
                font-size: 22/@pxtorem;
            }
        }
    }
}
</style>

