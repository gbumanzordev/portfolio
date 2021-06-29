<template>
  <div class="blog">
    <Header>My Blog</Header>
    <BlogPost v-for="post of posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import BlogPost from "@/components/BlogPost";
import { blogPosts } from "@/utils/posts";

export default {
  name: "Blog",
  components: { BlogPost, Header },
  data() {
    return {
      posts: blogPosts,
    };
  },
};
</script>

<style scoped>
.blog {
  @apply pt-4 px-8;
}
</style>
