<template>
  <div class="votedetail">
      <div class="detail-top">
          <div class="tit">
              <p class="name">投票活动一</p>
              <p class="time">截至时间&nbsp;:&nbsp;2018-07-25</p>
          </div>
          <div class="content">
              活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动
                  介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活
                  动介绍活动介绍活动介绍活动介绍。
          </div>
          <div class="pic">
              <img src="../../assets/images/bgimg.png" alt="">
          </div>
      </div>
      <div class="activity">
          <div class="activityName">
              <p class="title">1、活动名称</p>
              <ul class="activity-list">
                  <li>
                      <p>A、活动一</p>
                      <input type="checkbox" name="" id="">
                  </li>
                   <li>
                      <p>A、活动二</p>
                      <input type="checkbox" name="" id="">
                  </li>
                   <li>
                      <p>A、活动三</p>
                      <input type="checkbox" name="" id="">
                  </li>
              </ul>
          </div>
           <div class="activityName">
              <p class="title">2、活动名称</p>
              <ul class="activity-list">
                  <li>
                      <p>A、活动一</p>
                      <input type="checkbox" name="" id="">
                  </li>
                   <li>
                      <p>A、活动二</p>
                      <input type="checkbox" name="" id="">
                  </li>
                   <li>
                      <p>A、活动三</p>
                      <input type="checkbox" name="" id="">
                  </li>
              </ul>
          </div>
      </div>
      <div class="submit">
          <router-link to="votesResult" tag="button">
              提交
          </router-link>
      </div>
  </div>
</template>
<style lang="less" scoped>
@pxtorem:24rem;
.votedetail {
    width: 100%;
    height: auto;
    .detail-top {
        width: 100%;
        background: #ffffff;
        padding: 0 30/@pxtorem;
        .tit {
            width: 100%;
            text-align: center;
            padding-top: 46/@pxtorem;
            padding-bottom: 37/@pxtorem;
            .name {
                font-size: 32/@pxtorem;
                color: #333;
                font-weight: bold;
                margin-bottom: 10/@pxtorem;
            }
            .time {
                font-size: 24/@pxtorem;
                color: #999;
            }
        }
        .content {
            width: 100%;
            font-size: 28/@pxtorem;
            color: #666;
            padding-bottom: 40/@pxtorem;
        }
        .pic {
            width: 100%;
            height: 300/@pxtorem;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .activity {
        width: 100%;
        height: auto;
        background: #ffffff;
        margin-bottom: 108/@pxtorem;
        .activityName {
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


