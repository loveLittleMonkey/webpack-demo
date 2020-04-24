<template>
  <!-- <div class="example">{{ msg }}</div> -->
  <div class="m-code-button">
    <mu-button :size="'L'" :radius="false" @click="components_show"
      >components_show</mu-button
    >
    <mu-button :size="'L'" :radius="false" @click="plugins_show"
      >plugins_show</mu-button
    >

    <mu-dialog
      v-model="show"
      title="发现新版本"
      cancel-text="不再提示"
      confirm-text="立即更新"
      text="发现精彩1.3.9已经发布，欢迎到各大应用商店下载！"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></mu-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
      show: false,
    };
  },
  methods: {
    components_show() {
      this.show = true;
    },
    onConfirm() {
      console.log("确定");
    },
    onCancel() {
      console.log("取消");
    },
    plugins_show() {
      this.$mu.dialog.show({
        title: "发现新版本",
        text: "发现精彩1.3.9已经发布，欢迎到各大应用商店下载！",
        direction: "vertical",
        onShow() {
          console.log("显示");
        },
        onHide() {
          console.log("隐藏");
        },
        onConfirm() {
          console.log("确定");
        },
        onCancel() {
          console.log("取消");
        },
      });
    },
  },
};
</script>

<style>
.example {
  color: red;
}
</style>
