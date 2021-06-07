<template>
  <div class="project">
    <img :src="project.photo" alt="" />
    <h3>{{ project.name }}</h3>
    <p>
      {{ project.description }}
    </p>
    <div class="tags">
      <div
        v-for="tech of project.stack"
        :key="tech"
        class="rounded-full py-1 px-4 text-white text-xs"
        :class="tech.color"
      >
        {{ tech.name }}
      </div>
    </div>
    <div class="actions">
      <a
        v-if="project.githubRepo"
        :href="project.githubRepo"
        target="_blank"
        class="bg-white rounded-full text-gray-900"
      >
        <i class="fab fa-github" />
      </a>
      <a
        :href="project.url"
        target="_blank"
        class="bg-white rounded-full text-gray-900"
      >
        <i class="fas fa-link"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.tags {
  div {
    font-family: "Fira Sans", sans-serif;
  }
  @apply flex my-4 mb-8 px-4;
  div:not(div:last-child) {
    @apply mr-4;
  }
}
.project {
  @apply flex flex-col shadow-lg rounded-lg hover:shadow-xl;
}

img {
  @apply h-52;
  object-fit: cover;
}

h3 {
  @apply py-4 text-xl font-bold overflow-ellipsis whitespace-nowrap overflow-x-hidden px-4;
}

p {
  @apply text-lg px-4 mb-4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.actions {
  @apply px-4 mb-4 flex justify-center;

  a {
    @apply text-2xl;
  }

  a + a {
    @apply ml-4;
  }
}
</style>
