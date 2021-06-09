<template>
  <div class="project">
    <img :src="photo" alt="" />
    <h3>{{ project.name }}</h3>
    <div class="pictures">
      <img
        v-for="photo of project.images"
        :key="photo"
        @click="swapPhoto(photo)"
        :src="photo"
      />
    </div>
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
    <div class="actions" v-if="project.githubRepo || project.url">
      <a
        v-if="project.githubRepo"
        :href="project.githubRepo"
        target="_blank"
        class="bg-gray-300 text-gray-900 hover:bg-gray-200"
      >
        <i class="fab fa-github" /> Source Code
      </a>
      <a
        :href="project.url"
        target="_blank"
        class="hover:bg-gray-100 border-gray-100 border-2"
        >Demo
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
  data() {
    return {
      photo: "",
    };
  },
  mounted() {
    if (this.project) {
      this.photo = this.project.photo;
    }
  },
  methods: {
    swapPhoto(photo) {
      this.photo = photo;
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

.pictures {
  @apply grid grid-cols-4 px-4 gap-3 mb-4;

  img {
    @apply w-16 h-16 rounded-md border-2 hover:border-gray-900 cursor-pointer;
  }
}

p {
  @apply text-sm leading-6 px-4 mb-4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.actions {
  @apply px-4 mb-4 flex;

  a {
    @apply px-4 py-2 flex items-center text-xs font-bold rounded-md;
    font-family: "Fira Sans", sans-serif;

    i {
      @apply text-sm mr-2;
    }
  }

  a + a {
    @apply ml-4;
  }
}
</style>
