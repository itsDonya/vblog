<template>
  <div class="max-w-xl flex flex-col items-start justify-start gap-4">
    <div class="w-full">
      <h1 class="text-3xl text-emerald-500 font-bold">
        {{ title }}
        <nuxt-link :to="'/posts/' + fbID + '/edit'" class="inline text-lg">
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
      Written by
      <nuxt-link
        class="text-zinc-600 text-base font-bold"
        :to="'/' + authorName"
        >{{ authorName }}</nuxt-link
      >
      at
      <span class="text-zinc-600 text-base">{{ date | filterDate }}</span>
      <span v-if="edited">(edited at {{ editDate | filterDate }} )</span>
    </p>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fbID: String,
    title: {
      type: String,
      required: true,
    },
    thumbnailLink: {
      type: String,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorId: {
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
