<template>
  <nuxt-link
    :to="'/category/' + categoryName"
    class="px-2 py-0.5 text-sm text-emerald-500 border-[1px] border-emerald-500 rounded hover:bg-emerald-500 hover:text-white transition-all"
  >
    <slot />({{ categoryQty }})</nuxt-link
  >
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      required: true,
      default: "all",
    },
  },
  computed: {
    // Show number of posts exist in this category
    categoryQty() {
      const postList = this.$store.getters.getPostByCategory(this.categoryName);
      return postList.length;
    },
  },
};
</script>
