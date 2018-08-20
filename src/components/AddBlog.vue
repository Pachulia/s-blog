<template>
  <div class="add-blog">

    <h2>添加博客</h2>  
      <form>
        <label>博客标题</label>
        <input type="text" v-model="title" required >
        <label>博客内容</label>
        <textarea v-model="content"></textarea>
      </form>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog:{
        title:"gittest",
        content:""
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
