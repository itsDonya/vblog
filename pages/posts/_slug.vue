import PostPreview from '../../components/posts/PostPreview.vue';

<template>
  <article class="w-full py-4 flex items-center justify-center">
    <postsPostPreview v-bind="post" />
  </article>
</template>

<script>
export default {
  computed: {
    post() {
      const postId = this.$route.params.slug;
      return this.$store.getters.getPostById(postId);
    },
  },
};
</script>
