<template>
  <div class="startvote">
    <div class="content">
      <div class="votename">
        <p class="tit">投票名称:</p>
        <p class="res">投票活动一</p>
      </div>
      <div class="votedui">
        <p class="tit">投票对象:</p>
        <p class="right"><img src="../../assets/images/arrow-right.png" alt=""></p>
      </div>
      <div class="time">
        <p class="time-img">
          <img src="../../assets/images/vertical.png" alt="">
        </p>
        <p class="tit">投票时间</p>
      </div>
      <div class="votedui">
        <p class="tit">开始时间:</p>
        <DatePicker type="date" placeholder="选择开始日期" style="width: 200px"></DatePicker>
        <p class="right">
          <img src="../../assets/images/arrow-right.png" alt="">
        </p>
      </div>
      <div class="votedui">
        <p class="tit">结束时间:</p>
        <DatePicker type="date" placeholder="选择结束日期" style="width: 200px"></DatePicker>
        <p class="right"><img src="../../assets/images/arrow-right.png" alt=""></p>
      </div>
      <div class="voteresult">
        <p class="tit">投票结果:</p>
        <p class="cont">{{message}}</p>
        <p class="switch">
          <i-switch v-model="switch1" @on-change="change"></i-switch>
        </p>
      </div>
      <div class="votezhaiyao">
        <p class="tit">投票摘要:</p>
          <Upload action="//jsonplaceholder.typicode.com/posts/" id="uploadFile">
            <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
          </Upload>
        <textarea name="zhaiyao" id="zhaiyao" cols="25" rows="10" placeholder="请输入投票摘要">
        </textarea>
      </div>
      <div class="time question">
        <p class="time-img">
          <img src="../../assets/images/vertical.png" alt="">
        </p>
        <p class="tit">投票问题</p>
      </div>
      <div class="votedui">
        <p class="tit">1、团建活动</p>
      </div>
      <div class="votedui">
        <p class="tit">2、团建活动</p>
      </div>
    </div>
    <div class="add">
      <router-link to="addQuestion" tag="span">+添加问题</router-link>
    </div>
    <div class="submit">
      <button class="cancel">取消</button>
      <button class="sure">确定</button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.startvote {
  width: 100%;
  height: auto;
  .add {
    font-size: 28/@pxtorem;
    color: #4d9407;
    margin-left: 31/@pxtorem;
    margin-top: 51/@pxtorem;
  }
  .submit {
    display: flex;
    justify-content: space-around;
    button {
      width: 258/@pxtorem;
      height: 80/@pxtorem;
      border-radius: 10/@pxtorem;
      margin-top: 102/@pxtorem;
      margin-bottom: 80/@pxtorem;
      font-size: 32/@pxtorem;
    }
    .cancel {
      color: #999;
    }
    .sure {
      background: #4d9407;
      color: #fff;
    }
  }
  .content {
    width: 100%;
    background: #ffffff;
    .votename {
      width: 100%;
      height: 90/@pxtorem;
      padding-left: 30/@pxtorem;
      padding-right: 31/@pxtorem;
      display: flex;
      font-size: 28/@pxtorem;
      align-items: center;
      border-bottom: 1/@pxtorem #eee solid;
      .tit {
        margin-right: 32/@pxtorem;
      }
      .res {
        width: 478/@pxtorem;
        height: 60/@pxtorem;
        background: #eee;
        color: #aaa;
        border-radius: 10/@pxtorem;
        padding-left: 20/@pxtorem;
        line-height: 60/@pxtorem;
      }
    }
    .votedui {
      width: 100%;
      height: 90/@pxtorem;
      padding-left: 30/@pxtorem;
      padding-right: 31/@pxtorem;
      display: flex;
      justify-content: space-between;
      font-size: 28/@pxtorem;
      align-items: center;
      border-bottom: 1/@pxtorem #eee solid;
      .right {
        width: 15/@pxtorem;
        height: 27/@pxtorem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .time {
      width: 100%;
      height: 90/@pxtorem;
      padding: 28/@pxtorem 31/@pxtorem 28/@pxtorem 30/@pxtorem;
      display: flex;
      color: #333;
      font-size: 28/@pxtorem;
      font-weight: bold;
      align-items: center;
      border-bottom: 1/@pxtorem #eee solid;
      .time-img {
        margin-right: 19/@pxtorem;
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
    .voteresult {
      width: 100%;
      height: 90/@pxtorem;
      padding-left: 30/@pxtorem;
      padding-right: 31/@pxtorem;
      display: flex;
      justify-content: space-between;
      font-size: 28/@pxtorem;
      align-items: center;
      border-bottom: 1/@pxtorem #eee solid;
      .cont {
        color: #aaa;
      }
      .switch {
        width: 111/@pxtorem;
        height: 55/@pxtorem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .votezhaiyao {
    width: 100%;
    padding-left: 30/@pxtorem;
    padding-right: 31/@pxtorem;
    display: flex;
    justify-content: space-between;
    font-size: 28/@pxtorem;
    border-bottom: 1/@pxtorem #eee solid;
    height: 270/@pxtorem;
    position: relative;
    #uploadFile{
      position: absolute;
      bottom: 30/@pxtorem;
      left: 220/@pxtorem;
    }
    #zhaiyao {
      background: #eee;
      width: 534/@pxtorem;
      margin: 25/@pxtorem 0;
    }
    .tit {
      margin-top: 33/@pxtorem;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      switch1: true,
      message: "允许查看投票结果"
    }
  },
  methods: {
    change(status) {
      // this.$Message.info('开关状态：' + status);
      if (status == true) {
        this.message = "允许查看投票结果"
      } else {
        this.message = "不允许查看投票结果"
      }
    }
  }
}
</script>


