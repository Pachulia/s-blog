<template>
  <div id="app">
    <add-blog> </add-blog>
    <show-blog></show-blog>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlog
  }
}
</script>

<style>

</style>
