<template>
  <div class="wrapper">
    <div class="section p-4 bg-gray-200">
      <article>
        <h1>Hello there.</h1>
        <img
          src="https://avatars.githubusercontent.com/u/45671861?v=4"
          alt="This is me"
          class="w-80 mt-8"
        />
      </article>
      <article>
        <p>I am a Software Engineer from El Salvador</p>
        <p>
          I'm currently working as a Frontend Lead Developer at Applaudo
          Studios.
        </p>
        <p>
          While most of the work I've done is with Angular, I have also
          experience with Vue.js and Laravel for Back-End services.
        </p>
        <p>
          You can reach me through any of the links I left in the contact page.
          Or if you have a project in mind, you can also leave a message in the
          Contact section or to my
          <a href="mailto:gbumanzordev@gmail.com" class="font-bold">email</a>.
        </p>
      </article>
    </div>
    <div class="section bg-gray-600 text-white">
      <article><h1>Technologies I've worked With</h1></article>
      <article>
        <ul>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="JavaScript"
            />
          </li>
          <li>
            <img
              src="https://cdn.svgporn.com/logos/typescript-icon.svg"
              alt="TypeScript"
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
              alt="Angular"
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              alt="Vue.js"
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
              alt="Laravel"
            />
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
article {
  @apply flex flex-col px-4 justify-center;
}
h1 {
  @apply text-5xl font-bold mt-4;
  line-height: 4rem;
}
p {
  @apply mt-5 text-lg leading-10;
}

.section {
  @apply grid grid-cols-1 md:grid-cols-2 p-4;
  height: calc(100vh - 76px);

  @media (max-width: 768px) {
    height: 100%;
  }
}

ul {
  @apply grid grid-cols-2 md:grid-cols-3;
  list-style: none;

  li {
    @apply p-8;
  }
  li > img {
    @apply w-40;
  }
}
</style>
