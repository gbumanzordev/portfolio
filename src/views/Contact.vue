<template>
  <div class="about">
    <article>
      <div class="social-networks">
        <h1>Get in Touch</h1>
        <p>
          If you want to follow me/reach out through social media, you can
          follow me on any of these platforms:
        </p>
        <Social />
        <p>Of course, you can also ➡</p>
      </div>
      <div class="contact-form">
        <h2>Send me a Message</h2>
        <div class="form-group">
          <label for="">Your name:</label>
          <input
            type="text"
            placeholder="Please enter your name"
            class="bg-gray-200 focus:bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div class="form-group">
          <label for="">Your Email:</label>
          <input
            type="email"
            class="bg-gray-200 focus:bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div class="form-group">
          <label>Subject:</label>
          <input
            type="text"
            class="bg-gray-200 focus:bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div class="form-group">
          <label>Message:</label>
          <textarea
            class="bg-gray-200 focus:bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          class="bg-gray-200 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-300 mt-4 mb-8"
          disabled="disabled"
        >
          Send Message
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import Social from "@/components/shared/Social.vue";

export default {
  name: "Contact",
  components: { Social },
};
</script>

<style lang="scss" scoped>
.about {
  @apply pt-4 px-4 bg-gray-700 text-gray-50;
  height: calc(100vh - 76px);

  @media (max-width: 768px) {
    height: 100%;
  }
}

h1 {
  @apply text-3xl font-bold mb-12;
}

h2 {
  @apply text-xl font-bold mb-4;
}

.form-group {
  @apply flex flex-col w-full;

  label {
    @apply mt-4 mb-2;
  }
}

article {
  @apply grid grid-cols-1 md:grid-cols-2 gap-12 h-full px-4;

  div {
    @apply flex flex-col justify-center items-start;
  }
}

.submit {
  @apply flex;
}

button[disabled] {
  cursor: not-allowed;
}
</style>
