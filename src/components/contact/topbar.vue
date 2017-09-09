<template>
    <div class="topbar">
        <router-link to="/profileDetail" tag="p" class="top-list" active-class="active1">
            <p>我的资料</p>
        </router-link>
        <router-link to="/myProfile" tag="p" class="top-list" active-class="active2">
            <p>常用联系人</p>
        </router-link>
    </div>
</template>
<style lang="less" scoped>
@pxtorem: 24rem;
.topbar {
    width: 100%;
    height: 90/@pxtorem;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    // border-bottom: 1/@pxtorem #eeeeee solid;
    p {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30/@pxtorem;
        color: #666;
        box-sizing: border-box;
    }
    .active1 {
        background: #fee9ec;
        color: #b5101e;
        border-bottom: 4/@pxtorem #b5101e solid;
    }
    .active2 {
        background: #fee9ec;
        color: #b5101e;
        border-bottom: 4/@pxtorem #b5101e solid;
    }
}
</style>

