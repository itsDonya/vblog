<template>
  <BaseForm class="w-80">
    <!-- Logo -->
    <Logo class="text-emerald-600 select-none" />

    <!-- Email -->
    <label class="w-full flex flex-col items-start gap-1">
      <span class="text-sm text-emerald-500">Email</span>
      <input
        type="text"
        name="email"
        v-model="user.email"
        v-validate="'required|email'"
        class="w-full px-2 py-0.5 bg-inherit text-zinc-500 rounded border-[1px] border-emerald-500 focus:ring-2 ring-emerald-500/30 outline-none transition-all"
      />
      <p class="text-xs text-red-500">{{ errors.first("email") }}</p>
    </label>

    <!-- Password -->
    <label class="w-full flex flex-col items-start gap-1">
      <span class="text-sm text-emerald-500">Password</span>
      <div class="w-full flex justify-between gap-2">
        <input
          :type="passwordVisibilityMode"
          name="password"
          v-model="user.password"
          ref="password"
          v-validate="'required|min:6'"
          class="w-full px-2 py-0.5 bg-inherit text-zinc-500 rounded border-[1px] border-emerald-500 focus:ring-2 ring-emerald-500/30 outline-none transition-all"
        />
        <img
          @click="togglePasswordVisibility"
          :src="require('~/static/icons/' + visibilityIcon + '.svg')"
          class="w-4 cursor-pointer"
          alt=""
        />
      </div>
      <p class="text-xs text-red-500">{{ errors.first("password") }}</p>
    </label>

    <!-- Confirm password -->
    <label class="w-full flex flex-col items-start gap-1">
      <span class="text-sm text-emerald-500">Confirm Password</span>
      <input
        type="password"
        name="entered password"
        v-model="passwordConfirmation"
        v-validate="'required|confirmed:password'"
        class="w-full px-2 py-0.5 bg-inherit text-zinc-500 rounded border-[1px] border-emerald-500 focus:ring-2 ring-emerald-500/30 outline-none transition-all"
      />
      <p class="text-xs text-red-500">
        {{ errors.first("entered password") }}
      </p>
    </label>

    <!-- Buttons -->
    <div class="w-full flex items-center justify-between">
      <button
        type="submit"
        @click.prevent="validateBeforeSubmit"
        class="px-8 py-2 text-white text-sm hover:shadow-lg bg-emerald-500 rounded-md"
      >
        {{ mode }}
      </button>
      <p
        @click="changeSingInMode"
        class="text-sm text-emerald-600 cursor-pointer"
      >
        {{ insteadMode }} instead
      </p>
    </div>
  </BaseForm>
</template>

<script>
export default {
  data() {
    return {
      mode: "Login",
      user: {
        email: "",
        password: "",
      },
      passwordConfirmation: "",
      passwordVisibilityMode: "password",
    };
  },
  computed: {
    insteadMode() {
      return this.mode === "Login" ? "Sign up" : "Login";
    },
    visibilityIcon() {
      return this.passwordVisibilityMode === "text"
        ? "eye-slash-regular"
        : "eye-regular";
    },
  },
  methods: {
    changeSingInMode() {
      if (this.mode === "Login") {
        this.mode = "Sign up";
      } else {
        this.mode = "Login";
      }
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // Valid
        }
      });
    },
    togglePasswordVisibility() {
      if (this.passwordVisibilityMode === "text") {
        this.passwordVisibilityMode = "password";
      } else {
        this.passwordVisibilityMode = "text";
      }
    },
  },
};
</script>
