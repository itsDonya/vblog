<template>
  <article class="min-h-full py-6 flex items-center justify-center">
    <PostList :posts="posts" />
  </article>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  mounted() {
    if (!this.$store.state.fetched) {
      this.$store.dispatch("fetchPosts");
    }
  },
};
</script>
