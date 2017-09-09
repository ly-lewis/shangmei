<template>
    <div class="seach-f">
        <div class="head-search">
            <div class="form-item">
                <input class="search" name="search" placeholder="搜索人名/部门/岗位">
            </div>
            <div class="form-btn">
                <button>取消</button>
            </div>
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
        </ul>
    </div>
</template>
<style lang="less" scoped>
@pxtorem : 24rem;
.head-search {
    width: 100%;
    height: 90/@pxtorem;
    display: flex; // justify-content: center;
    align-items: center;
    background: #ffffff;
    margin-bottom: 20/@pxtorem;
    .form-item {
        width: 75%;
        height: 65/@pxtorem;
        margin: 12/@pxtorem 30/@pxtorem;
        input {
            width: 100%;
            height: 65/@pxtorem;
            border-radius: 10/@pxtorem;
            font-size: 28/@pxtorem;
            color: #aaaaaa;
            background: #eeeeee;
            ;
        }
    }
    .form-btn {
        height: 100%;
        width: 15%;
        button {
            height: 100%;
            width: 100%;
            background: #ffffff;
            color: #b5101e;
            font-size: 28/@pxtorem
        }
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

