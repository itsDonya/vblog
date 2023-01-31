<template>
  <ValidationProvider
    class="w-[100%] flex flex-col items-start"
    :name="inputName"
    :vid="inputName"
    v-slot="{ errors }"
    :rules="validationRules"
  >
    <label class="w-full flex flex-col items-start gap-1">
      <span class="text-sm text-emerald-500">{{ inputLabel }}</span>
      <select
        :name="inputName"
        v-model="modelValue[inputName]"
        class="w-full py-0.5 bg-inherit rounded px-2 border-[1px] border-emerald-500 focus:outline-none focus:ring-4 ring-emerald-500/20"
      >
        <option
          class="text-sm text-emerald-500"
          v-for="(option, i) in options"
          :value="option"
          :key="i"
        >
          {{ option }}
        </option>
      </select>
      <field-error>{{ errors[0] }}</field-error>
    </label>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    options: {
      type: [Array],
    },
    inputLabel: {
      type: String,
    },
    inputName: {
      type: String,
    },
    validationRules: {
      type: [String, Object],
    },
    selectedOption: {
      type: String,
    },
  },
};
</script>
