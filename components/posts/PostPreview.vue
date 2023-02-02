<template>
  <div class="max-w-xl flex flex-col items-start justify-start gap-4">
    <!-- <div class="w-full flex items-center justify-between gap-6"> -->
    <div class="w-full">
      <h1 class="text-3xl text-emerald-500 font-bold">
        {{ title }}
        <nuxt-link :to="'/posts/' + id + '/edit'" class="inline text-lg">
          (
          <img
            src="~/static/icons/pencil.png"
            class="cursor-pointer inline w-4"
            alt="edit icon"
          />
          )
        </nuxt-link>
      </h1>
    </div>
    <img
      v-if="thumbnailLink"
      :src="thumbnailLink"
      class="w-full rounded-xl"
      :alt="title"
    />
    <p class="text-zinc-400 text-sm italic">
      Written by <span class="text-zinc-600 text-base">{{ author }}</span> at
      <span class="text-zinc-600 text-base">{{ date | filterDate }}</span>
      <span v-if="edited">(edited at {{ editDate | filterDate }} )</span>
    </p>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: [String, Number],
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
      type: [String, Date],
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    edited: {
      type: Boolean,
    },
    editDate: {
      type: [Date, String],
    },
  },
};
</script>
