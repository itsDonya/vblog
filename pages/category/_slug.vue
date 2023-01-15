<template>
  <article class="py-6 flex flex-col items-center justify-start gap-4">
    <PostList :posts="posts" />
  </article>
</template>

<script>
export default {
  computed: {
    posts() {
      const postCategory = this.$route.params.slug;
      if (postCategory === "all") {
        return this.$store.getters.getPosts;
      } else {
        return this.$store.getters.getPostByCategory(postCategory);
      }
    },
  },
};
</script>
