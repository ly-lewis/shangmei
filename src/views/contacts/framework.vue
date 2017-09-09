<template>
    <div>
        <topbar></topbar>
        <div class="nav-path">
            <a href="javascript:;"><img src="../../assets/images/arrow-left.png" alt=""></a>
            <p><span>上美OA</span><span>>上美公司</span><span>>人事部</span></p>
        </div>
        <ul class="list-detail">
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
                <div class="info-img2"><img src="../../assets/images/phone.png" alt=""></div>
            </li>
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
                <div class="info-img2"><img src="../../assets/images/phone.png" alt=""></div>
            </li>
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
                <div class="info-img2"><img src="../../assets/images/phone.png" alt=""></div>
            </li>
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
                <div class="info-img2"><img src="../../assets/images/phone.png" alt=""></div>
            </li>
        </ul>
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

.list-detail {
    width: 100%;
    background: #ffffff;
    li {
        width: 100%;
        height: 114/@pxtorem;
        box-sizing: border-box;
        padding-left: 30/@pxtorem;
        padding-right: 34/@pxtorem;
        display: flex;
        align-items: center;
        border-bottom: 1/@pxtorem #d2d2d2 solid;
        .info-img1 {
            width: 78/@pxtorem;
            height: 78/@pxtorem;
            box-sizing: border-box;
            margin-right: 19/@pxtorem;
            img {
                width: 100%;
                height: 100%;
                flex: 1;
            }
        }
        .info-detail {
            flex: 3;
            .name {
                font-size: 28/@pxtorem;
                color: #333;
                margin-bottom: 16/@pxtorem;
                span {
                    font-size: 26/@pxtorem;
                    color: #999;
                }
            }
            .position {
                font-size: 26/@pxtorem;
                color: #666;
            }
        }
        .info-img2 {
            width: 63/@pxtorem;
            height: 63/@pxtorem;
            img {
                width: 100%;
                height: 100%;
                flex: 1;
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


