<template>
  <article class="w-full flex flex-col items-center justify-center gap-6">
    <img
      v-if="isLoading"
      src="../../static/icons/loader.png"
      class="animate-spin"
      alt=""
    />
    <postsPost v-for="post in posts" :key="post.id" v-bind="post" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchPosts() {
      this.isLoading = true;
      setTimeout(() => {
        this.posts = this.$store.getters.posts;
        this.isLoading = false;
      }, 2000);
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
