const colors = {
  angular: "bg-red-700",
  javascript: "bg-yellow-500",
  laravel: "bg-blue-700",
  nestjs: "bg-red-800",
  ngrx: "bg-purple-700",
  vue: "bg-green-600",
};

export const projects = [
  {
    name: "DecisionLink - Value Cloud",
    photo: require("@/assets/dl.png"),
    description:
      "Value Cloud SaaS to manage Cases, Hypotheses, Realizations, Case Studies and Models.",
    stack: [
      { name: "Angular", color: colors.angular },
      { name: "NgRx", color: colors.ngrx },
      { name: "Laravel", color: colors.laravel },
    ],
    images: [
      require("@/assets/dl-1.png"),
      require("@/assets/dl-2.png"),
      require("@/assets/dl-3.png"),
      require("@/assets/dl-4.png"),
    ],
  },
  {
    name: "Vue-Gi-Oh!",
    photo: require("@/assets/vgo.png"),
    description:
      "Small pet project to practice my Vue skills, retrieves, paginates and shows details for the Yu-Gi-Oh! Cards.",
    githubRepo: "https://github.com/gbumanzordev/vue-gi-oh",
    url: "https://vue-gi-oh.netlify.app/",
    stack: [{ name: "Vue", color: colors.vue }],
    images: [require("@/assets/vgo-1.png"), require("@/assets/vgo-2.png")],
  },
  {
    name: "Gatekeeper",
    photo: require("@/assets/gk.png"),
    description:
      "Single-Sign-On Application to handle authentication and sync for Applaudo Studios Employees.",
    stack: [
      { name: "Angular", color: colors.angular },
      { name: "NgRx", color: colors.ngrx },
      { name: "NestJS", color: colors.nestjs },
    ],
    images: [
      require("@/assets/gk-1.png"),
      require("@/assets/gk-2.png"),
      require("@/assets/gk-3.png"),
    ],
  },
  {
    name: "Vuekemon",
    photo: require("@/assets/pokemon.jpeg"),
    description: "A small game built with vue to guess the pokemon.",
    githubRepo: "https://github.com/gbumanzordev/vuekemon",
    url: "https://vuekemon.netlify.app",
    stack: [
      { name: "JavaScript", color: colors.javascript },
      { name: "Vue", color: colors.vue },
    ],
    images: [require("@/assets/vk-1.png")],
  },
  {
    name: "Portfolio",
    photo: require("@/assets/portfolio.webp"),
    description:
      "Portfolio to practice my Vue skills, showcase my job and recent projects, my stack and how to reach out.",
    githubRepo: "https://github.com/gbumanzordev/portfolio",
    url: "https://gbumanzordev.netlify.app",
    stack: [
      { name: "JavaScript", color: colors.javascript },
      { name: "Vue", color: colors.vue },
    ],
    images: [
      require("@/assets/p-1.png"),
      require("@/assets/p-2.png"),
      require("@/assets/p-3.png"),
    ],
  },
];
