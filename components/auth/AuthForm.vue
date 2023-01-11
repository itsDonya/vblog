<template>
  <UIBaseForm class="w-80">
    <!-- Logo -->
    <Logo class="text-emerald-600 select-none" />

    <!-- Inputs -->
    <label class="w-full flex flex-col items-start gap-1">
      <span class="text-sm text-emerald-500">Email</span>
      <input
        type="email"
        class="w-full px-2 py-0.5 bg-inherit text-zinc-500 rounded border-[1px] border-emerald-500 focus:ring-2 ring-emerald-500/30 outline-none transition-all"
      />
    </label>
    <label class="w-full flex flex-col items-start gap-1">
      <span class="text-sm text-emerald-500">Password</span>
      <input
        type="password"
        class="w-full px-2 py-0.5 bg-inherit text-zinc-500 rounded border-[1px] border-emerald-500 focus:ring-2 ring-emerald-500/30 outline-none transition-all"
      />
    </label>

    <!-- Buttons -->
    <div class="w-full flex items-center justify-between">
      <button
        class="px-8 py-2 text-white text-sm hover:shadow-lg bg-emerald-500 rounded-md"
      >
        {{ mode }}
      </button>
      <p @click="toggleMode" class="text-sm text-emerald-600 cursor-pointer">
        {{ insteadMode }} instead
      </p>
    </div>
  </UIBaseForm>
</template>

<script>
export default {
  data() {
    return {
      mode: "Login",
    };
  },
  computed: {
    insteadMode() {
      return this.mode === "Login" ? "Sign up" : "Login";
    },
  },
  methods: {
    toggleMode() {
      if (this.mode === "Login") {
        this.mode = "Sign up";
      } else {
        this.mode = "Login";
      }
    },
  },
};
</script>
