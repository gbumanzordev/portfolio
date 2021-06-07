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
    url: "https://demo.maui-dev.value-cloud.com",
    stack: [
      { name: "Angular", color: colors.angular },
      { name: "NgRx", color: colors.ngrx },
      { name: "Laravel", color: colors.laravel },
    ],
  },
  {
    name: "Vue-Gi-Oh!",
    photo: require("@/assets/vgo.png"),
    description:
      "Small pet project to practice my Vue skills, retrieves, paginates and shows details for the Yu-Gi-Oh! Cards.",
    githubRepo: "https://github.com/gbumanzordev/vue-gi-oh",
    url: "https://adoring-dijkstra-dafe6b.netlify.app/",
    stack: [{ name: "Vue", color: colors.vue }],
  },
  {
    name: "Gatekeeper",
    photo: require("@/assets/gk.png"),
    description:
      "Single-Sign-On Application to handle authentication and sync for Applaudo Studios Employees.",
    url: "https://gatekeeper.applaudostudios.com",
    stack: [
      { name: "Angular", color: colors.angular },
      { name: "NgRx", color: colors.ngrx },
      { name: "NestJS", color: colors.nestjs },
    ],
  },
  {
    name: "Portfolio",
    photo: require("@/assets/portfolio.webp"),
    description:
      "Portfolio to showcase my job and recent projects, my stack and how to reach out.",
    githubRepo: "https://github.com/gbumanzordev/portfolio",
    url: "https://gbumanzordev.netlify.app",
    stack: [
      { name: "JavaScript", color: colors.javascript },
      { name: "Vue", color: colors.vue },
    ],
  },
];
