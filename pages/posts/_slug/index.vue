<template>
  <article class="w-full py-4 flex flex-col items-center justify-center">
    <LoaderIcon v-if="isLoading" />
    <PostPreview v-else v-bind="post" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      isLoading: true,
    };
  },
  methods: {
    async getPost() {
      const postId = this.$route.params.slug;
      this.post = await fetch(
        `https://vblog-vue-default-rtdb.firebaseio.com/posts/${postId}.json`
      ).then((res) => res.json());
      this.isLoading = false;
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>
