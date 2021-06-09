<template>
  <article class="wrapper">
    <Header>Projects I've worked on</Header>
    <transition-group tag="div" class="list">
      <Project
        v-for="project in projects"
        :project="project"
        :key="project.name"
      />
    </transition-group>
  </article>
</template>

<script>
import Header from "@/components/shared/Header";
import Project from "@/components/Project";
import { projects } from "@/utils/projects";

export default {
  name: "Portfolio",
  components: { Project, Header },
  data() {
    return { projects };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  @apply pt-4 px-8 pb-8;
}

.list {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8;
}
</style>
