<template>
  <div class="blog">
    <Header>My Blog</Header>
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
export default {
  name: "Blog",
  components: { Header },
};
</script>

<style scoped>
.blog {
  @apply pt-4 px-4;
}
</style>
