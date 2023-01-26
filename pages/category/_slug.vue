<template>
  <article class="py-6 flex flex-col items-center justify-start gap-4">
    <PostList :posts="posts" />
  </article>
</template>

<script>
export default {
  middleware({ store }) {
    if (!store.state.fetched) {
      store.dispatch("fetchPosts");
    }
  },
  computed: {
    posts() {
      const postCategory = this.$route.params.slug;

      return this.$store.getters.getPostByCategory(postCategory);
    },
  },
};
</script>
