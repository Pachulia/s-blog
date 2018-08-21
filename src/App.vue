<template>
  <div id="app">
    <!-- <add-blog> </add-blog>
    <show-blog></show-blog> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ShowBlog from "./components/ShowBlog";
import BlogHeader from "./components/BlogHeader";

export default {
  name: "App",
  components: {
    AddBlog,
    ShowBlog,
    BlogHeader
  }
};
</script>

<style>
</style>
