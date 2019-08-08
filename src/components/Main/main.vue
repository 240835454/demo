<template>
    <div class='main' :class="(statu&&count>0?'active':'')">
        <div class="title">
            <img :src="info.headUrl" alt="">
            <span v-text="info.titles"></span>
            <span class="arrows"></span>
        </div>
        <div class="content">
            <div class="folder">
                <span class="arrows" v-for="(item,index) in nav" :key="index" v-text="item.name"></span>
            </div>
            <!-- <v-list v-for="(item,index) in list" :item="item" :statu="statu" :key="index" @PickStatu="PickStatu"></v-list> -->
            <router-view v-for="(item,index) in list" :item="item" :statu="statu" :key="index" @PickStatu="PickStatu">  
            </router-view>
        </div>
        <div class="download" v-show="statu&&count>0">
            <div class="bottom">
                <img src="http://xianggan.027cgb.com/619923/Temp/download.png" alt="">
                <span>下载</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            statu: Boolean
        },
        data() {
            return {
                nav: null,
                info: null,
                list: [],
                pick: false,
                hasPick: false,
                count: 0
            }
        },
        created() {
            this.getList()
        },
        methods: {
            Pick(index) {
                this.currentIndex = index;
                this.pick = !this.pick;
            },
            PickStatu(n) {
                if (n == true) {
                    this.count += 1;
                } else {
                    this.count -= 1;
                }
            },
            getList() {
                this.$axios.get(
                        '/API/APP/Common.ashx?action=getShareFiles&ShareCode=26c4dad21c7c4c5f87a7bba14cf4e77a&ParentId=37'
                    )
                    .then(res => {
                        let a = res.data.Data
                        this.info = a.infoObj;
                        this.list = a.lists;
                        this.nav = a.details.navl;
                    })
            }
        },
        components: {
            vList: () => import('./list')
        }
    }
</script>

<style scoped lang='less'>
    .basicArrow {
        overflow: visible;
        position: absolute;
        right: 20px;

        &::after {
            content: "";
            display: inline-block;
            height: 10px;
            width: 10px;
            border-width: 1px 1px 0 0;
            border-color: #999;
            border-style: solid;
            -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 10, 0);
            transform: matrix(0.71, 0.71, -0.71, 0.71, 10, 0);
        }
    }

    .main {
        .title {
            height: 80px;
            line-height: 80px;
            padding-left: 10px;
            letter-spacing: 1px;
            background-color: #fff;

            >img {
                width: 50px;
                height: 50px;
                margin-right: 15px;
            }

            .arrows {
                .basicArrow;
            }
        }

        .content {
            width: 100%;
            padding: 10px 0;
            margin-top: 5px;
            background-color: #fff;

            .folder {
                display: flex;
                height: 30px;
                line-height: 30px;
                border: 1px solid #eee;
                font-size: 12px;
                color: #333;

                >span {
                    padding-left: 25px;
                    text-align: center;
                    border: solid #aaa;
                    border-width: 1px 0;
                }

                .arrows {
                    display: flex;
                    align-items: center;
                    overflow: visible;

                    &::after {
                        content: "";
                        display: inline-block;
                        height: 19px;
                        width: 19px;
                        border-width: 1px 1px 0 0;
                        border-color: #999;
                        border-style: solid;
                        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 10, 0);
                        transform: matrix(0.71, 0.71, -0.71, 0.71, 10, 0);
                    }
                }
            }
        }

        .download {
            display: flex;
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 50px;
            border: solid #e6e6e6;
            border-width: 1px 0;
            font-size: 10px;
            color: #4994fe;
            background-color: #fff;

            .bottom {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 auto;

                img {
                    width: 25px;
                    height: 25px;
                }

                span {
                    display: flex;
                }
            }
        }
    }

    .active {
        margin-bottom: 50px;
    }
</style>