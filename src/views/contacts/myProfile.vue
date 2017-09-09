<template>
  <div class="myprofile">
      <topbar></topbar>
              <ul class="list-detail">
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
            </li>
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
            </li>
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
            </li>
            <li>
                <div class="info-img1"><img src="../../assets/images/touxiang-1.png" alt=""></div>
                <div class="info-detail">
                    <p class="name">Angelbaby/公司
                        <span></span>
                    </p>
                    <p class="position">人事部/人事经理</p>
                </div>
            </li>
        </ul>
        <footerbar></footerbar>
  </div>
</template>
<style lang="less" scoped>
@pxtorem:24rem;
.myprofile {
    width: 100%;
    .topbar {
        width: 100%;
        height: 90/@pxtorem;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1/@pxtorem #eeeeee solid;
        div {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30/@pxtorem;
            color: #666;
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
            margin-right: 21/@pxtorem;
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
    }
}
}
</style>
<script>
import topbar from '../../components/contact/topbar'
import footerbar from '../../components/contact/footerbar'
export default {
  data(){
      return {

      }
  },
  components:{
      footerbar,topbar
  }
}
</script>


