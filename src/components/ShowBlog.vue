<template>
  <div v-theme:column="'width'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filterBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
      <h2 v-rainbow> 
        {{blog.title | to-upperCase}}
      </h2>
      </router-link>
      <article> 
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "show-blog",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    //created事件,在在网页加载完毕前请求get数据
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(data => (this.blogs = data.body.slice(0, 10)));
  },
  computed: {
    //匹配标题搜索
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    "to-upperCase": function(value) {
      return value.toUpperCase();
    }
  }
};
</script>
< !-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
