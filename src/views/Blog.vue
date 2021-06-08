<template>
  <div class="blog">
    <Header>My Blog</Header>
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import BlogPost from "@/components/BlogPost";

export default {
  name: "Blog",
  components: { BlogPost, Header },
};
</script>

<style scoped>
.blog {
  @apply pt-4 px-8;
}
</style>
