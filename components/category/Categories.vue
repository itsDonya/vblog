<template>
  <section class="max-w-3xl flex items-center justify-start gap-2 flex-wrap">
    <nuxt-link
      to="/posts"
      class="px-2 py-0.5 text-sm text-emerald-500 border-[1px] border-emerald-500 rounded hover:bg-emerald-500 hover:text-white transition-all"
      >all</nuxt-link
    >
    <nuxt-link
      v-for="(category, i) of categories"
      :to="'/category/' + category"
      :key="i"
      class="px-2 py-0.5 text-sm text-emerald-500 border-[1px] border-emerald-500 rounded hover:bg-emerald-500 hover:text-white transition-all"
    >
      {{ category | split }}
    </nuxt-link>
  </section>
</template>

<script>
import categories from "../../static/categories";
export default {
  computed: {
    categories() {
      return categories;
    },
  },
};
</script>
