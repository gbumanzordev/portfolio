<template>
  <div class="project">
    <img src="https://picsum.photos/200/200" alt="" />
    <h3>Decisionlink - Maui</h3>
    <p>
      SaaS for Value Cloud Management. Value Case, Hypotheses and Realizations
      handling as well as Models, Factors, Benefits and Case Studies.
    </p>
    <div class="actions">
      <a
        href="https://github.com/gbumanzordev"
        target="_blank"
        class="bg-white rounded-full text-gray-900"
      >
        <i class="fab fa-github" />
      </a>
      <a
        href="https://twitter.com/gbumanzordev"
        target="_blank"
        class="bg-white rounded-full text-gray-900"
      >
        <i class="fab fa-twitter" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style scoped lang="scss">
.project {
  @apply flex flex-col shadow-lg rounded-lg hover:shadow-xl;
}

img {
}

h3 {
  @apply py-4 text-xl font-bold uppercase overflow-ellipsis whitespace-nowrap overflow-x-hidden px-4;
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
