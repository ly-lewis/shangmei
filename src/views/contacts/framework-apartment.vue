<template>
    <div>
        <topbar></topbar>
        <div class="nav-path">
            <a href="javascript:;"><img src="../../assets/images/arrow-left.png" alt=""></a>
            <p>
                <span>上美OA</span>
                <span>>上美公司</span>
            </p>
        </div>
        <div class="content">
            <ul class="apartment-list">
                <router-link to="framework" tag="li" class="apartment-list-detail">
                    <div class="info-img"><img src="../../assets/images/file.png" alt=""></div>
                    <div class="info-name">人事部</div>
                    <div class="info-arrow"><img src="../../assets/images/arrow-right.png" alt=""></div>
                </router-link>
                <li class="apartment-list-detail">
                    <div class="info-img"><img src="../../assets/images/file.png" alt=""></div>
                    <div class="info-name">行政部</div>
                    <div class="info-arrow"><img src="../../assets/images/arrow-right.png" alt=""></div>
                </li>
                <li class="apartment-list-detail">
                    <div class="info-img"><img src="../../assets/images/file.png" alt=""></div>
                    <div class="info-name">财务部</div>
                    <div class="info-arrow"><img src="../../assets/images/arrow-right.png" alt=""></div>
                </li>
                <li class="apartment-list-detail">
                    <div class="info-img"><img src="../../assets/images/file.png" alt=""></div>
                    <div class="info-name">开发部</div>
                    <div class="info-arrow"><img src="../../assets/images/arrow-right.png" alt=""></div>
                </li>
            </ul>
        </div>
        <footerbar></footerbar>
    </div>
</template>
<style lang="less" scoped>
@pxtorem : 24rem;
.nav-path {
    width: 100%;
    background: #ffffff;
    height: 90/@pxtorem;
    box-sizing: border-box;
    padding-left: 30/@pxtorem;
    padding-right: 34/@pxtorem;
    margin-top: 20/@pxtorem;
    border-bottom: 1/@pxtorem #d2d2d2 solid;
    display: flex;
    align-items: center;
    a {
        img {
            width: 16/@pxtorem;
            height: 29/@pxtorem;
        }
    }
    p {
        font-size: 28/@pxtorem;
        color: #666;
        margin-left: 34/@pxtorem;
    }
}

.content {
    width: 100%;
    background: #ffffff;
    .apartment-list {
        width: 100%;
        li {
            width: 100%;
            height: 114/@pxtorem;
            box-sizing: border-box;
            padding-right: 31/@pxtorem;
            padding-left: 30/@pxtorem;
            border-bottom: 1/@pxtorem #d2d2d2 solid;
            display: flex;
            align-items: center;
            .info-img {
                width: 41/@pxtorem;
                height: 35/@pxtorem;
                margin-right: 21/@pxtorem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .info-name {
                font-size: 28/@pxtorem;
                color:#333;
            }
            .info-arrow {
                position: absolute;right: 30/@pxtorem;
                width: 16/@pxtorem;
                height: 29/@pxtorem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
<script>
import footerbar from '../../components/contact/footerbar'
import topbar from '../../components/contact/top-search'
export default {
    data() {
        return {

        }
    },
    components: {
        topbar, footerbar
    }
}
</script>


