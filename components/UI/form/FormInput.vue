<template>
  <ValidationProvider
    class="w-[100%] flex flex-col items-start"
    :rules="validationRules"
    :name="inputName"
    :vid="inputName"
    v-slot="{ errors }"
  >
    <label class="w-full flex flex-col items-start gap-1">
      <span class="text-sm text-emerald-500">{{ inputLabel }}</span>
      <div class="w-full flex justify-between gap-2">
        <input
          :type="inputType"
          class="w-full px-2 py-0.5 bg-inherit text-zinc-500 rounded border-[1px] border-emerald-500 focus:ring-2 ring-emerald-600/40 outline-none transition-all"
          :ref="refName"
          v-model="modelValue[inputName]"
        />
        <slot />
      </div>
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
    inputLabel: {
      type: String,
    },
    inputName: {
      type: String,
    },
    inputType: {
      type: String,
      required: true,
      default: "text",
    },
    validationRules: {
      type: [String, Object],
    },
    refName: {
      type: String,
    },
  },
};
</script>
