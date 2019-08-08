<template>
  <div class='header'>
    <div class="return">
      <span class="arrows"></span>
      <span class="share">分享</span>
    </div>
    <span class="edit" @click="edit" v-text="(text?'编辑':'取消')"></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: true,
      }
    },
    methods: {
      edit() {
        this.$emit("edit",this.text);
        this.text = !this.text;
      }
    },
    components: {

    }
  }
</script>

<style scoped lang='less'>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    width: 100%;
    background-color: #4994fe;
    color: #fff;
    font-size: 18px;

    .return {
      margin-left: 10px;

      .arrows {
        overflow: visible;
        position: absolute;

        &::after {
          content: "";
          display: inline-block;
          height: 10px;
          width: 10px;
          border-width: 3px 3px 0 0;
          border-color: #fff;
          border-style: solid;
          -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 10, 0);
          transform: matrix(-0.71, -0.71, 0.71, -0.71, 10, 0);
        }
      }

      .share {
        margin-left: 30px;
      }
    }

    .edit {
      font-size: 16px;
      margin-right: 10px;
    }
  }
</style>