<template>
  <div class="blog">
    <Header>My Blog</Header>
    <h3 class='my-6 text-lg text-red-900'>
      <b>Notice:</b> This section of my portfolio is a work in progress, none of
      the posts in the list are published in this site, yet. But they will be
      soon.
    </h3>
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
