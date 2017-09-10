<template>
    <div class="votedetail">
        <div class="title">
            <p class="tit">投票活动一</p>
            <div class="del">
                <p class="begin">开始&nbsp;:&nbsp;
                    <span>2018-07-25</span>
                </p>
                <p class="end">结束&nbsp;:&nbsp;
                    <span>2018-07-25</span>
                </p>
                <p class="count">
                    <span>20人</span>已投票</p>
            </div>
        </div>
        <div class="votecontent">
            <ul class="votename-list">
                <li>
                    <h3 class="votename-tit">1、活动名称</h3>
                    <ul class="votename-rate">
                        <li>
                            <div class="voteoption">
                                <p class="voteoption-tit">A、活动一</p>
                                <p class="voteoption-count">
                                    <span>20&nbsp;票</span>&nbsp;&nbsp;&nbsp;(50%)</p>
                            </div>
                            <Progress :percent="45" status="active" hide-info id="pro1"></Progress>
                        </li>
                        <li>
                            <div class="voteoption">
                                <p class="voteoption-tit">A、活动一</p>
                                <p class="voteoption-count">
                                    <span>20&nbsp;票</span>&nbsp;&nbsp;&nbsp;(70%)</p>
                            </div>
                            <Progress :percent="70" status="active" hide-info id="pro1"></Progress>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3 class="votename-tit">1、活动名称</h3>
                    <ul class="votename-rate">
                        <li>
                            <div class="voteoption">
                                <p class="voteoption-tit">A、活动一</p>
                                <p class="voteoption-count">
                                    <span>20&nbsp;票</span>&nbsp;&nbsp;&nbsp;(50%)</p>
                            </div>
                            <Progress :percent="45" status="active" hide-info id="pro1"></Progress>
                        </li>
                        <li>
                            <div class="voteoption">
                                <p class="voteoption-tit">A、活动一</p>
                                <p class="voteoption-count">
                                    <span>20&nbsp;票</span>&nbsp;&nbsp;&nbsp;(70%)</p>
                            </div>
                            <Progress :percent="70" status="active" hide-info id="pro1"></Progress>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="comment">
            <div class="comment-head">
                <p class="img">
                   <img src="../../assets/images/vertical.png" alt="">
                </p>
                <p class="tit">评论</p>
            </div>
            <div class="comment-content">
               <div class="detail-name">
                   <img src="../../assets/images/touxiang-1.png" alt="">
                   <span>Angelbaby</span>
               </div>
               <div class="detail-content">评论内容评论内容评论内容评论内容评论内容评论内
                   容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</div>
               <div class="detail-date">2018-08-25 12:25:30</div>
            </div>
                        <div class="comment-content">
               <div class="detail-name">
                   <img src="../../assets/images/touxiang-1.png" alt="">
                   <span>Angelbaby</span>
               </div>
               <div class="detail-content">评论内容评论内容评论内容评论内容评论内容评论内
                   容评论内容评论内容评论内容评论内容</div>
               <div class="detail-date">2018-08-25 12:25:30</div>
            </div>
        </div>
        <div class="ipt">
            <form action="" method="post">
                <input type="text">
                <input type="button" value="发送">
            </form>
        </div>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.votedetail {
    width: 100%;
    height: auto;
    .title {
        width: 100%;
        height: 150/@pxtorem;
        background: #ffffff;
        border-bottom: 1/@pxtorem #eee solid;
        padding-left: 30/@pxtorem;
        padding-right: 36/@pxtorem;
        .tit {
            font-size: 32/@pxtorem;
            color: #333;
            padding-top: 46/@pxtorem;
            text-align: center;
            font-weight: bold;
        }
        .del {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 24/@pxtorem;
            color: #999;
            .count {
                span {
                    color: #eb8696;
                }
            }
        }
    }
    .votecontent {
        width: 100%;
        height: auto;
        background: #ffffff;
        border-bottom: 1/@pxtorem #eee solid;
        padding-left: 30/@pxtorem;
        padding-right: 36/@pxtorem;
        margin-bottom: 20/@pxtorem #eeeeee solid;
        .votename-list {
            width: 100%;
            li {
                .votename-tit {
                    font-size: 28/@pxtorem;
                    color: #333;
                    font-weight: bold;
                    padding-top: 40/@pxtorem;
                    margin-bottom: 35/@pxtorem;
                }
                .votename-rate {
                    li {
                        margin-bottom: 40/@pxtorem;
                        .voteoption {
                            font-size: 28/@pxtorem;
                            display: flex;
                            justify-content: space-between;
                            .voteoption-tit {
                                color: #666;
                            }
                            .voteoption-count {
                                span {
                                    color: #eb8696
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .comment {
        width: 100%;
        background: #ffffff;
        margin-bottom: 90/@pxtorem;
        .comment-head {
            width: 100%;
            height: 90/@pxtorem;
            box-sizing: border-box;
            padding-left: 30/@pxtorem;
            padding-right: 32/@pxtorem;
            display: flex;
            align-items: center;
            border-bottom: 1/@pxtorem #eeeeee solid;
            .img {
                width: 5/@pxtorem;
                height: 35/@pxtorem;
                margin-right: 20/@pxtorem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .tit {
                font-size: 28/@pxtorem;
                color:#333;
                font-weight: bold;
            }
        }
        .comment-content {
            width: 100%;
            min-height: 200/@pxtorem;
            padding: 0 32/@pxtorem;
            display: flex;
            flex-direction: column;
            border-bottom: 1/@pxtorem #eeeeee solid;
            .detail-name {
                width: 100%;
                height: 78/@pxtorem;
                display: flex;
                align-items: center;
                margin-top: 20/@pxtorem;
                margin-bottom: 20/@pxtorem;
                img {
                    width: 78/@pxtorem;
                    height: 78/@pxtorem;
                    margin-right: 20/@pxtorem;
                }
                span {
                    font-size: 28/@pxtorem;
                    font-weight: bold;
                    color:#333;
                }
            }
            .detail-content {
                font-size: 28/@pxtorem;
                color: #666;
                margin-bottom: 13/@pxtorem;
            }
            .detail-date {
                font-size: 24/@pxtorem;
                color:#999;
                margin-bottom: 26/@pxtorem;
                text-align: right;
            }
        }
    }
    .ipt {
        width: 100%;
        height: 90/@pxtorem;
        background: #ffffff;
        padding: 13/@pxtorem 30/@pxtorem;
        border-top: 1/@pxtorem #eeeeee solid;
        position: fixed;
        bottom: 0;
        form {
            height: 100%;
                input[type="text"] {
                width: 528/@pxtorem;
                height: 100%;
                background: #eeeeee;
                border-radius: 10/@pxtorem;
                margin-right: 10/@pxtorem;
            }
             input[type="button"] {
                width: 138/@pxtorem;
                height: 100%;
                background: #4d9407;
                border-radius: 10/@pxtorem;
                font-size: 28/@pxtorem;
                color:#fff;
            }
        }
    }
}
</style>
<script>
export default {

}
</script>


