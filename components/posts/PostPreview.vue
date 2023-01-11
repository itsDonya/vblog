<template>
  <div class="max-w-xl flex flex-col items-start justify-start gap-4">
    <h1 class="text-4xl text-emerald-500 font-bold">{{ title }}</h1>
    <img
      v-if="thumbnailLink"
      :src="thumbnailLink"
      class="w-full rounded-xl"
      :alt="title"
    />
    <p class="text-zinc-400 text-sm italic">
      Written by <span class="text-zinc-600 text-base">{{ author }}</span> at
      <span class="text-zinc-600 text-base">{{ date | filterDate }}</span>
    </p>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnailLink: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>
