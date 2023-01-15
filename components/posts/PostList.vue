<template>
  <article class="w-full flex flex-col items-center justify-center gap-6">
    <Post v-for="post in posts" :key="post.id" v-bind="post" />
  </article>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>
