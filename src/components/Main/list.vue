<template>
    <div class="item">
        <div class="img">
            <div :class="(item.fType==1?'folder':'')">
            </div>
        </div>
        <div class="text">
            <span v-text="item.name"></span>
            <span v-text="item.date" class="date"></span>
        </div>
        <span class="arrows" v-show="!statu"></span>
        <span class="noPick" v-show="statu" @click="Pick"></span>
        <span v-show="pick&&statu" class="pick" @click="Pick">
            <img src="http://xianggan.027cgb.com/619923/Temp/pick.png" alt="">
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object,
            statu: Boolean
        },
        data() {
            return {
                pick: false,
            }
        },
        methods: {
            Pick() {
                this.pick = !this.pick;
                this.$emit("PickStatu", this.pick);
            }
        },
        components: {

        }
    }
</script>

<style scoped lang='less'>
    .bgImage(@url) {
        @media (-webkit-min-device-pixel-ratio: 1) {
            background: url("../../static/icon/hdpi/icon_file_type_@{url}.png") no-repeat;
        }

        @media (-webkit-min-device-pixel-ratio: 2) {
            background: url("../../static/icon/xhdpi/icon_file_type_@{url}.png") no-repeat;
        }

        @media (-webkit-min-device-pixel-ratio: 3) {
            background: url("../../static/icon/xxhdpi/icon_file_type_@{url}.png") no-repeat;
        }
    }

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

    .item {
        display: flex;
        align-items: center;
        height: 65px;
        padding: 0 5px 0 10px;
        border-bottom: 1px solid #e6e6e6;

        .img {
            width: 30px;
            height: 30px;

            .folder {
                width: 30px;
                height: 30px;
                .bgImage("folder");
            }

            // img {
            //     max-width: 30px;
            //     max-height: 30px;
            // }
        }

        .text {
            display: flex;
            flex-direction: column;
            padding: 5px 18px;
            color: #333;
            font-size: 14px;

            .date {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }

        .arrows {
            .basicArrow;
        }

        .noPick {
            position: absolute;
            right: 10px;
            width: 20px;
            height: 20px;
            border: solid 1px #ccc;
            border-radius: 50%;
        }

        .pick {
            position: absolute;
            right: 10px;

            img {
                width: 20px;
                height: 20px;
            }
        }
    }
</style>