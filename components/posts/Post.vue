<template>
  <nuxt-link
    :to="'/posts/' + id"
    class="w-96 border-2 border-emerald-400 group rounded-xl p-5 flex flex-col items-start gap-3 hover:shadow-xl transition-all"
  >
    <img :src="thumbnailImg" class="w-full rounded-xl" :alt="title" />
    <div class="w-full flex items-center justify-between">
      <h2
        class="text-2xl font-bold text-emerald-400 group-hover:border-l-8 group-hover:pl-2 border-emerald-600 transition-all"
      >
        {{ title }}
      </h2>
      <span class="px-2 py-1 text-xs text-white bg-zinc-500 rounded">{{
        category
      }}</span>
    </div>
    <p class="text-zinc-600 line-clamp-3">{{ body }}</p>

    <div class="w-full flex items-center justify-between">
      <p class="text-xs text-zinc-400">Posted at {{ date | filterDate }}</p>
      <p class="text-xs text-zinc-400">Written by {{ author }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    thumbnailLink: {
      type: String,
    },
    date: {
      type: [String, Date],
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    thumbnailImg() {
      // Show default image if thumbnailLink doesn't exist
      return (
        this.thumbnailLink ||
        "https://oxyo.ru/image/cache/catalog/oxyo-demo/blog-1140x700.png"
      );
    },
  },
};
</script>
