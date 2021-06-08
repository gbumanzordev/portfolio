<template>
  <nav
    class="flex bg-gray-900 text-white sticky top-0 content-center items-center"
  >
    <router-link to="/"><h2>Gerson Umanzor</h2></router-link>
    <ul>
      <li><router-link to="/blog" active-class="hidden">Blog</router-link></li>
      <li>
        <router-link to="/portfolio" class="ml-4" active-class="hidden"
          >Portfolio</router-link
        >
      </li>
      <li>
        <router-link to="/contact" class="ml-4" active-class="hidden"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
h2 {
  @apply text-xl font-bold;
}

nav {
  @apply flex justify-between content-center py-6 px-8;
}

ul {
  @apply flex;
}

a {
  @apply text-gray-200 font-normal text-lg;
  font-family: "Fira Sans", sans-serif;
  transition: all 0.5s;

  &:hover {
    @apply text-white;
  }
}
</style>
