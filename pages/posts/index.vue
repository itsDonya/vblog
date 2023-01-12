<template>
  <article class="min-h-full py-6 flex items-center justify-center">
    <postsPostList :posts="posts" />
  </article>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>
