<template>
  <div>
    <input ref="input" class="input" type="text" placeholder="请输入" />
    <div :class="{ height: isHeight, short: isShort }"></div>

    <mu-button :size="'L'" :radius="false" @click="focus"
      >让input入焦</mu-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHeight: true,
      isShort: false,
    };
  },
  methods: {
    focus() {
      this.isShort = true;
      this.isHeight = false;
      // this.$nextTick(() => {
      //   this.$refs.input.focus();
      // });
      setTimeout(() => {
        this.$refs.input.focus();
      }, 200); // ios 长时间延期入焦会失效
    },
  },
};
</script>

<style>
.input {
  width: 100%;
  height: 1rem;
  background: red;
  color: yellow;
}

.height {
  height: 100vh;
  width: 100%;
  background: blue;
}
.short {
  height: 5vh;
  width: 100%;
  background: green;
}
</style>
