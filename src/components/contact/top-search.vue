<template>
   <div class="head-search">
            <div class="form-item">
                <input class="search" name="search" placeholder="搜索人名/部门/岗位">
            </div>
        </div>
</template>
<style lang="less" scoped>
@pxtorem : 24rem;
    .head-search {
        width: 100%;
        height: 90/@pxtorem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        .form-item {
            width: 100%;
            height: 65/@pxtorem;
            margin: 12/@pxtorem 30/@pxtorem;
            input {
                width: 100%;
                height: 65/@pxtorem;
                border-radius: 10/@pxtorem;
                text-align: center;
                font-size: 28/@pxtorem;
                color: #aaaaaa;
                background: #eeeeee;
                ;
            }
        }
    }
</style>

