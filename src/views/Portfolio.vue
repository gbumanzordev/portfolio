<template>
  <article class="wrapper">
    <Header>Projects I've worked on</Header>
    <transition-group tag="div" class="list">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </transition-group>
  </article>
</template>

<script>
import Header from "@/components/shared/Header";
import Project from "@/components/Project";
export default {
  name: "Portfolio",
  components: { Project, Header },
};
</script>

<style scoped lang="scss">
.wrapper {
  @apply pt-4 px-4 pb-8;
}

h1 {
  @apply mb-8;
}

.list {
  @apply grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8;
}
</style>
