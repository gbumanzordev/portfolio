<template>
  <div class="wrapper">
    <h1>Angular Best Practices</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate
      eius eum explicabo, illo magni necessitatibus sed tempora tenetur! Aliquam
      assumenda at aut commodi dolorum ducimus enim, est explicabo fuga ipsa
      iure modi necessitatibus nisi nulla repudiandae sint tenetur totam. Autem
      dicta et fugiat iusto magnam nesciunt possimus praesentium vitae!
    </p>
    <button>Read full article</button>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
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
