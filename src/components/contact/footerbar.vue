<template>
    <div class="contact-footbar">
        <ul>
            <router-link to="home" tag="li" class="footer-list" active-class="active1">
                <div class="img img-l"></div>
                <!-- <img src="../../assets/images/footer-left-1.png" alt=""> -->
                <p>通讯录</p>
            </router-link>
            <router-link to="apartment" tag="li" class="footer-list" active-class="active2">
                <div class="img img-m"></div>
                <p>组织架构</p>
            </router-link>
            <router-link to="profileDetail" tag="li" class="footer-list" active-class="active3">
                <div class="img img-r"></div>
                <p>我的资料</p>
            </router-link>
        </ul>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.contact-footbar {
    width: 100%;
    ul {
        width: 100%;
        height: 90/@pxtorem;
        background: #ffffff;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .footer-list {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .img-l {
                width: 34/@pxtorem;
                height: 38/@pxtorem;
                background: url(../../assets/images/footer-left.png) no-repeat center;
                background-size: 100%;
                margin-top: 13/@pxtorem;
            }
            .img-m {
                 width: 39/@pxtorem;
                height: 39/@pxtorem;
                 background: url(../../assets/images/footer-mid.png) no-repeat center;
                background-size: 100%;
                margin-top: 13/@pxtorem;
            }
            .img-r {
                 width: 52/@pxtorem;
                height: 38/@pxtorem;
                background: url(../../assets/images/footer-right.png) no-repeat center;
                background-size: 100%;
                margin-top: 13/@pxtorem;
            }
            p {
                font-size: 22/@pxtorem;
            }
        }
        .active1 {
            color: #b5101e;
             .img-l {
                width: 34/@pxtorem;
                height: 38/@pxtorem;
                background: url(../../assets/images/footer-left-1.png) no-repeat center;
                background-size: 100%;
                margin-top: 13/@pxtorem;
            }
        }
        .active2 {
            color: #b5101e;
            .img-m {
                width: 39/@pxtorem;
                height: 39/@pxtorem;
                background: url(../../assets/images/footer-mid-1.png) no-repeat center;
                background-size: 100%;
                margin-top: 13/@pxtorem;
            }
        }
        .active3 {
            color: #b5101e;
            .img-r {
                width: 52/@pxtorem;
                height: 38/@pxtorem;
                background: url(../../assets/images/footer-right-1.png) no-repeat center;
                background-size: 100%;
                margin-top: 13/@pxtorem;
            }
        }
    }
}
</style>

