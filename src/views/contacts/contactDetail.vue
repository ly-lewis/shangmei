<template>
    <div class="profiledetail">
        <div class="touxiang">
            <div class="pic"><img src="../../assets/images/touxiang-1.png" alt=""></div>
            <div class="info">
                <p class="info-name">晨晨</p>
                <p class="info-sex">女</p>
            </div>
        </div>
        <div class="content">
            <div class="information">
                <ul class="info-detail">
                    <li>
                        <div class="info-title">
                            <span>基本信息</span>
                        </div>
                    </li>
                    <li>
                        <p class="common">编号&nbsp;:
                            <span>937867395223</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">账号类型&nbsp;:
                            <span>主账号</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">部门&nbsp;:
                            <span>信息部</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">岗位&nbsp;:
                            <span>测试工程师</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">职称&nbsp;:
                            <span>一级特工</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">职级&nbsp;:
                            <span>一级</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">职责描述&nbsp;:
                            <span>测试程序</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">状态&nbsp;:
                            <span>试用</span>
                        </p>
                    </li>
                    <li>
                        <p class="common language">系统语言&nbsp;:
                            <span>
                                <select>
                                    <option value="volvo">简体中文</option>
                                    <option value="saab">繁体中文</option>
                                    <option value="opel">英语</option>
                                    <option value="audi">法语</option>
                                </select>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p class="common">办公地点&nbsp;:
                            <span>华滋奔腾大厦</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">入职日期&nbsp;:
                            <span>2017-09-06</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="information">
                <ul class="info-detail">
                   <li>
                        <p class="common">移动电话&nbsp;:
                            <span>18817328547</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">办公电话&nbsp;:
                            <span>021-524879658</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">其他电话&nbsp;:
                            <span>021-524879658</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">邮箱&nbsp;:
                            <span>24879658@qq.com</span>
                        </p>
                    </li>
                   <li>
                        <p class="common">办公室&nbsp;:
                            <span>华滋奔腾大厦102室</span>
                        </p>
                    </li>   
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="information">
                <ul class="info-detail">
                    <li>
                        <div class="info-title">
                            <span>上下级关系</span>
                        </div>
                    </li>
                    <li>
                        <p class="common">直接上级&nbsp;:
                            <span>张三</span>
                        </p>
                    </li>
                    <li>
                        <p class="common">助理&nbsp;:
                            <span>李四</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bot">
            <div class="submit">+常用联系人</div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.profiledetail {
    width: 100%;
    .touxiang {
        background: url(../../assets/images/bgimg.png);
        width: 100%;
        height: 280/@pxtorem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        .pic {
            width: 141/@pxtorem;
            height: 141/@pxtorem;
            margin-top: 45/@pxtorem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .info {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            margin-top: 23/@pxtorem;
            .info-name {
                font-size: 32/@pxtorem;
                color: #fff;
                margin-right: 14/@pxtorem;
            }
            .info-sex {
                width: 32/@pxtorem;
                height: 32/@pxtorem;
                background: url(../../assets/images/xingbie.png) no-repeat;
                background-size: contain;
                font-size: 20/@pxtorem;
                color: #fff;
                line-height: 32/@pxtorem;
                text-align: center;
            }
        }
    }
    .content {
        width: 100%;
        background: #ffffff;
        margin-top: 20/@pxtorem;
        .information {
            width: 100%;
            .info-detail {
                margin-bottom: 20/@pxtorem;
                li {
                    width: 100%;
                    height: 90/@pxtorem;
                    display: flex;
                    box-sizing: border-box;
                    padding-left: 30/@pxtorem;
                    padding-right: 31/@pxtorem;
                    border-bottom: 1px #e2e2e2 solid;
                    .info-title {
                        width: 100%;
                        height: 90/@pxtorem;
                        background: url(../../assets/images/vertical.png) no-repeat left;
                        span {
                            margin-left: 25/@pxtorem;
                            font-size: 28/@pxtorem;
                            color: #333;
                            line-height: 90/@pxtorem;
                        }
                    }
                    .common {
                        font-size: 28/@pxtorem;
                        color: #666;
                        line-height: 90/@pxtorem;
                        span {
                            margin-left: 20/@pxtorem;
                        }
                    }
                    .tit {
                        width: 25%;
                        height: 100%;
                        display: flex;
                        font-size: 28/@pxtorem;
                        color: #666;
                        line-height: 90/@pxtorem;
                    }
                    .res {
                        width: 539/@pxtorem;
                        height: 65/@pxtorem;
                        font-size: 28/@pxtorem;
                        color: #666;
                        line-height: 65/@pxtorem;
                        background: #eeeeee;
                        border-radius: 10/@pxtorem;
                        text-align: center;
                    }
                }
                .special {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
    }
    .bot {
        width: 100%;
        height: 80/@pxtorem;
        display: flex;
        justify-content: center;
        margin-top: 135/@pxtorem;
        margin-bottom: 190/@pxtorem;
        .submit {
            width: 367/@pxtorem;
            height: 100%;
            font-size: 32/@pxtorem;
            color: #fff;
            text-align: center;
            line-height: 80/@pxtorem;
            background: #eb8696;
            border-radius: 10/@pxtorem
        }
    }
}
</style>
<script>
export default {
    data() {
        return {

        }
    },
    components: {

    }
}
</script>


