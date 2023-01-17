<template>
  <form
    class="w-80 px-10 py-6 flex flex-col items-center gap-4 border-2 border-emerald-500 rounded-xl"
  >
    <h1 v-if="formTitle" class="text-emerald-600 font-bold text-2xl uppercase">
      {{ formTitle }}
    </h1>
    <slot />
  </form>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String,
    },
  },
};
</script>
