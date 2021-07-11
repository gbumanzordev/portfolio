<template>
  <article class="p-8" v-if="post">
    <h1 class="text-3xl font-medium">{{ post.title }}</h1>
    <p
      class="mt-6 leading-8"
      v-for="paragraph of post.paragraphs"
      :key="paragraph"
    >
      {{ paragraph }}
    </p>
  </article>
</template>

<script>
import { blogPosts } from "@/utils/posts";

export default {
  name: "Post",
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    const postId = Number(this.$route.params.id);
    this.post = blogPosts.find((post) => post.id === postId);
  },
};
</script>

<style scoped></style>
