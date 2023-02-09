<template>
  <article class="min-h-full py-6 flex items-center justify-center">
    <PostList v-if="posts" :posts="posts" />
    <LoaderIcon v-else />
  </article>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  created() {
    if (!this.$store.state.fetched) {
      this.$store.dispatch("fetchPosts");
    }
  },
};
</script>
