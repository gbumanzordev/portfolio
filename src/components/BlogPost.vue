<template>
  <div class="wrapper">
    <h1>{{ post.title }}</h1>
    <p>
      {{ post.excerpt }}
    </p>
    <button>Read full article</button>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.wrapper {
  @apply mb-8 border-b-2 pb-4;
}
h1 {
  @apply text-2xl font-bold;
}

p {
  @apply leading-8 text-sm mb-4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

button {
  @apply bg-gray-800 py-2 px-4 rounded-lg text-white text-sm hover:bg-gray-900;
}
</style>
