<template>
  <nuxt-link :to="path" class="text-white hover:text-zinc-100 transition"
    ><slot
  /></nuxt-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
      default: "/",
    },
  },
};
</script>
