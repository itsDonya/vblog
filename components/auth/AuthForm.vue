<template>
  <form-base form-title="Sign In" :on-submit="onSubmit">
    <!-- Email -->
    <FormInput
      :modelValue="user"
      input-label="Email"
      input-name="email"
      input-type="text"
      validation-rules="required|email"
    />

    <!-- Password -->
    <form-input
      :modelValue="user"
      input-label="Password"
      input-name="password"
      :input-type="passwordVisibilityMode"
      validation-rules="required|min:6"
      ref-name="password"
    >
      <img
        @click="togglePasswordVisibility"
        :src="require('~/static/icons/' + visibilityIcon + '.svg')"
        class="w-4 cursor-pointer"
        alt=""
      />
    </form-input>

    <!-- Confirm password -->
    <FormInput
      :modelValue="user"
      input-label="Confirm Password"
      input-name="passwordConfirm"
      input-type="text"
      validation-rules="required|confirmed:password"
    />

    <!-- Buttons -->
    <div class="w-full flex items-center justify-between">
      <button
        type="submit"
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
  </form-base>
</template>

<script>
export default {
  data() {
    return {
      mode: "Login",
      user: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
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
    onSubmit() {
      // Login logic here
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
