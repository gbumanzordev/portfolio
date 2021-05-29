<template>
  <div class="wrapper">
    <Header>Projects I've worked on</Header>
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
export default {
  name: "Portfolio",
  components: { Header },
};
</script>

<style scoped lang="scss">
.wrapper {
  @apply pt-4 px-4;
}
</style>
