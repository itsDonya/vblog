<template>
  <ValidationObserver ref="validation" v-slot="{ handleSubmit }">
    <form
      @submit.prevent="handleSubmit(onSubmit)"
      class="w-96 px-10 py-6 flex flex-col items-center gap-4 border-2 border-emerald-500 rounded-xl"
    >
      <h1
        v-if="formTitle"
        class="text-emerald-600 font-bold text-2xl uppercase"
      >
        {{ formTitle }}
      </h1>
      <slot />
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    formTitle: {
      type: String,
    },
  },
  methods: {
    addError(key, value) {
      this.$validation.setErrors({
        [key]: value,
      });
    },
    reset() {
      this.$validation.reset();
    },
  },
  components: { ValidationObserver },
};
</script>
