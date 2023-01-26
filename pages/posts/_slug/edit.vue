<template>
  <article class="my-2 flex flex-col items-center">
    <LoaderIcon v-if="isLoading" />
    <PostEdit v-else v-bind="postDetails" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      postDetails: {},
      isLoading: true,
    };
  },
  methods: {
    async getPostDetails() {
      const postId = this.$route.params.slug;
      this.postDetails = await fetch(
        `https://vblog-vue-default-rtdb.firebaseio.com/posts/${postId}.json`
      ).then((res) => res.json());
      this.isLoading = false;
    },
  },
  mounted() {
    this.getPostDetails();
  },
};
</script>
