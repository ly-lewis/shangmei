<template>
  <div class="startvote">
    <div class="content">
      <div class="votedui">
        <p class="tit">题目编号一</p>
      </div>
      <div class="votename">
        <p class="tit">题目名称:</p>
        <p class="res"><input type="text" placeholder="请输入题目名称"></p>
      </div>
      <div class="votename">
        <p class="tit">选项A:</p>
        <p class="res"><input type="text" placeholder="请输入选项内容"></p>
      </div>
      <div class="votename">
        <p class="tit">选项B:</p>
        <p class="res"><input type="text" placeholder="请输入选项内容"></p>
      </div>
      <div class="votename">
        <p class="tit">选项C:</p>
        <p class="res"><input type="text" placeholder="请输入选项内容"></p>
      </div>
    </div>
    <div class="add">+添加问题</div>
    <div class="submit">
      <button class="cancel">取消</button>
      <button class="sure" @click="show">确定</button>
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
    .content{
      width: 100%;
      background: #ffffff;
      .votename {
        width:100%;
        height: 90/@pxtorem;
        padding-left:30/@pxtorem;
        padding-right:31/@pxtorem;
        display:flex;
        font-size: 28/@pxtorem;
        align-items: center;
        border-bottom: 1/@pxtorem #eee solid;
        .tit {
          margin-right: 32/@pxtorem;
          width: 20%;
        }
        .res {
          width: 478/@pxtorem;
          height: 60/@pxtorem;
          line-height: 60/@pxtorem;
          input {
            background: #eee;
            border-radius: 10/@pxtorem;
            width: 100%;
            height: 100%;
            padding-left: 20/@pxtorem;
          }
        }
      }
      .votedui {
        width:100%;
        height: 90/@pxtorem;
        padding-left:30/@pxtorem;
        padding-right:31/@pxtorem;
        display:flex;
        justify-content: space-between;
        font-size: 28/@pxtorem;
        align-items: center;
        border-bottom: 1/@pxtorem #eee solid;
        .right {
          width:15/@pxtorem;
          height:27/@pxtorem;
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
  export default {
data(){
return {

}
},
    methods:{
     show:function () {
       console.log('hello')
     }
    }
  }
</script>


