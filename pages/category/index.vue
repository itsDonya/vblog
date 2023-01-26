<template>
  <article class="p-4 flex items-center justify-center">
    <categories />
  </article>
</template>

<script>
export default {
  middleware({ store }) {
    if (!store.state.fetched) {
      store.dispatch("fetchPosts");
    }
  },
};
</script>
