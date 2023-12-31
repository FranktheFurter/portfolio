import { Html } from ".nuxt/components"

enum Tech {
  css = "css",
  flutter = "flutter",
  csharp = "c#",
  html = "html",
  javascript = "javascript",
  blazor = "blazor",
  figma = "figma",
  ssr = "ssr",
  azure = "azure",
  unity = "unity",
  vr = "vr",
  optitrack = "optitrack",
  threeD = "3d",
  motioncapture = "motion capture",
  rest = "rest api",
  cross = " cross platform",
  dart = "dart",
  nuxt = "nuxt",
  vue = "vue",
  tailwind = "tailwind",
  typescript = "typescript",
  netbackend = ".net backend",
}
enum ProjectType {
  private = "Private",
  professional = "Professional",
}
enum ProjectCategory {
  webApp = "Web Application",
  mobile = "Mobile Application",
  vr = "Virtual Reality",
}
type Link = {
  icon?: string
  desc: string
  url: string
}

type Project = {
  highlight: boolean
  projectTitle: string
  url: string
  images: string[]
  projectType: ProjectType
  projectCategory: ProjectCategory
  year: string
  tech: Tech[]
  links?: Link[]
  objectiveDetails: string[]
  projectDetails: string[]
}
export const projects: Project[] = [
  {
    highlight: true,
    projectTitle: "Custom ERP System with Blazor Server",
    url: "blazor-erp",
    images: [
      "/projects/blazor-erp/1.png",
      "/projects/blazor-erp/2.png",
      "/projects/blazor-erp/3.png",
      "/projects/blazor-erp/4.png",
    ],
    projectType: ProjectType.professional,
    projectCategory: ProjectCategory.webApp,
    year: "2022",
    tech: [
      Tech.css,
      Tech.html,
      Tech.blazor,
      Tech.ssr,
      Tech.figma,
      Tech.javascript,
      Tech.rest,
    ],

    objectiveDetails: [
      "The previous ERP system MyFactory was to be gradually replaced by a new ERP system developed in-house based on Blazor Server.",
    ],
    projectDetails: [
      "Since both the old system MyFactory and the new system are to be operated in parallel, they must be compatible with each other and data must be stored in the same backend.",
      "Users must be able to log in via Active Directory and are assigned various user rights via login",
      "With Blazor and the .Net stack a lot is possible, but to manipulate the DOM directly you have to work with Javascript interop.",
      "Given the large number of possible operations that an ERP system offers, it is very important to integrate these carefully into a UI so that users do not feel overwhelmed by the sheer abundance and the system can be operated intuitively.",
    ],
  },
  {
    highlight: true,
    projectTitle: "Flutter Game of Life",
    url: "flutter-game-of-life",
    images: [
      "/projects/flutter-gol/1.jpg",
      "/projects/flutter-gol/2.jpg",
      "/projects/flutter-gol/3.jpg",
    ],
    projectType: ProjectType.private,
    projectCategory: ProjectCategory.mobile,
    year: "2022",
    tech: [Tech.flutter, Tech.cross, Tech.dart],

    objectiveDetails: [
      "Tame of Life is my 'Goto-Project' to learn a new programming language or framework",
    ],
    projectDetails: [
      "I have always been fascinated by the Game of Life, a simple cellular automaton with complex emergent behaviors. Over the years, I have implemented it in many programming languages and frameworks, but my favorite implementation is the one I built using Flutter. The Flutter framework provides an intuitive and expressive way to build beautiful and responsive user interfaces, which made implementing the Game of Life a breeze. I also added a speed slider that allows users to adjust the speed of the simulation, making it easier to observe the evolution of the cells.",
      "If you're interested in trying out the Flutter implementation of the Game of Life, you can do so by following the link provided.",
    ],
    links: [
      {
        desc: "Github Repository",
        url: "https://github.com/FranktheFurter/game_of_life_flutter",
        icon: "i-mdi-github",
      },
      {
        desc: "Demo",
        url: "https://frankthefurter.github.io/game_of_life_flutter/#/",
        icon: "i-mdi-github",
      },
    ],
  },
  {
    highlight: true,
    projectTitle: "HoloDraw - Bachelor's Thesis",
    url: "holodraw",
    images: [
      "/projects/holodraw/1.png",
      "/projects/holodraw/2.png",
      "/projects/holodraw/3.png",
      "/projects/holodraw/3.png",
    ],
    projectType: ProjectType.private,
    projectCategory: ProjectCategory.vr,
    year: "2021",
    tech: [
      Tech.unity,
      Tech.vr,
      Tech.motioncapture,
      Tech.csharp,
      Tech.threeD,
      Tech.optitrack,
    ],

    objectiveDetails: [
      "HoloDraw, my Bachelor's thesis, aims to bridge the gap between the freedom of VR drawing and the precision of constrained 2D input, offering a unique solution for artists and designers in a virtual reality environment.",
    ],
    projectDetails: [
      "HoloDraw extends VRSketchIn, a VR drawing system, by introducing a dynamic drawing layer that follows the tablet's position and orientation, translating 2D input to 3D space in VR.",
      "The project aims to bridge the gap between the freedom of VR drawing and the precision of constrained 2D input, offering a unique solution for artists and designers.",
      "An analysis of existing VR drawing systems revealed a compromise between freedom and precision, which HoloDraw addresses by combining mid-air drawing and constrained 2D input.",
      "The concept of a dynamic drawing layer has been explored in other design systems, and HoloDraw adapts this concept to a VR drawing context.",
      "The development process of HoloDraw includes analyzing existing systems, deriving the concept, implementation, and evaluation to create a seamless and precise drawing experience in VR.",
    ],
  },
  {
    highlight: true,
    projectTitle: "Hardcore Writer",
    url: "hardcore-writer",
    images: [
      "/projects/hardcore-writer/1.png",
      "/projects/hardcore-writer/2.png",
      "/projects/hardcore-writer/3.png",
    ],
    projectType: ProjectType.private,
    projectCategory: ProjectCategory.mobile,
    year: "2022",
    tech: [Tech.flutter, Tech.cross, Tech.dart],

    objectiveDetails: [
      "Hardcore Writer is inspired by the Most Dangerous Writing App which is a web application for free writing that combats writer's block by deleting all progress if the user stops typing for five seconds.",
    ],
    projectDetails: [
      "Introducing Hardcore Writer, a unique and thrilling writing app inspired by the Most Dangerous Writing App. As a budding developer, I wanted to take up the challenge of creating my own version of this incredible tool to learn Flutter better. Hardcore Writer is my free version of the app, designed to offer the same exciting writing experience with a personalized touch.",
      "With Hardcore Writer, you can unleash your creativity and let your thoughts flow freely without the fear of losing your work. The app allows you to set your writing session with two customizable features - interval time and session length. The interval time is the duration between your last keystroke and when your text gets deleted, while the session length is the overall duration of your writing session. You can choose the values for both these features according to your preference.",
      "The app interface is user-friendly, with the timer displayed on the top right corner of the screen. You can keep track of the time remaining for your session and the time left before your text gets deleted. This feature adds an extra layer of excitement to your writing, making every moment count and encouraging you to keep writing.",
      "So, what are you waiting for? Try Hardcore Writer now with the link of the left side and take the first step towards improving your writing skills.",
    ],
    links: [
      {
        desc: "Github Repository",
        url: "https://github.com/FranktheFurter/hardcore_writer",
        icon: "i-mdi-github",
      },
      {
        desc: "Demo",
        url: "https://frankthefurter.github.io/hardcore_writer/#/",
        icon: "i-mdi-github",
      },
    ],
  },
  {
    highlight: true,
    projectTitle: "Neoblo - Warehouse Management System with Flutter",
    url: "neoblo",
    images: [
      "/projects/neoblo/1.png",
      "/projects/neoblo/2.png",
      "/projects/neoblo/3.png",
    ],
    projectType: ProjectType.professional,
    projectCategory: ProjectCategory.mobile,
    year: "2022",
    tech: [
      Tech.flutter,
      Tech.cross,
      Tech.dart,
      Tech.azure,
      Tech.rest,
      Tech.csharp,
      Tech.netbackend,
    ],

    objectiveDetails: [
      "The objective of this project was to replace an unstable warehouse management system with a new and efficient system that met all client requirements, using Flutter as the perfect cross-platform framework and MobX for state management.",
    ],
    projectDetails: [
      "Replaced the old warehouse management system with a new one, as the old one was unstable.",
      "Flutter was chosen due to its good performance on low-end Android scanners and its ability to be used by a few on web browsers, making it the perfect cross-platform framework.",
      "Used MobX for state management to ensure stability.",
      "The project was a success, as the old system was replaced with a new one that was more stable, efficient and user-friendly.",
      "The decision to use Flutter and MobX proved to be the right one, and the end result was a system that met all of the client's requirements and expectations.",
    ],
  },
  {
    highlight: true,
    projectTitle: "Composable Spareparts Webshop",
    url: "spareparts-webshop",
    images: [
      "/projects/spareparts-webshop/1.png",
      "/projects/spareparts-webshop/2.png",
      "/projects/spareparts-webshop/3.png",
      "/projects/spareparts-webshop/4.png",
      "/projects/spareparts-webshop/5.png",
      "/projects/spareparts-webshop/6.png",
    ],
    projectType: ProjectType.professional,
    projectCategory: ProjectCategory.webApp,
    year: "2023",
    tech: [
      Tech.ssr,
      Tech.vue,
      Tech.nuxt,
      Tech.tailwind,
      Tech.html,
      Tech.css,
      Tech.netbackend,
      Tech.typescript,
    ],

    objectiveDetails: [
      "The objective of this project was to replace an unstable warehouse management system with a new and efficient system that met all client requirements, using Flutter as the perfect cross-platform framework and MobX for state management.",
    ],
    projectDetails: ["TODO"],
  },
  {
    highlight: true,
    projectTitle: "Monteur Portal with Flutter",
    url: "monteur-portal",
    images: [
      "/projects/monteur-portal/1.png",
      "/projects/monteur-portal/2.png",
      "/projects/monteur-portal/3.png",
      "/projects/monteur-portal/4.png",
    ],
    projectType: ProjectType.professional,
    projectCategory: ProjectCategory.webApp,
    year: "2022",
    tech: [Tech.flutter, Tech.netbackend, Tech.cross, Tech.rest],

    objectiveDetails: ["TODO"],
    projectDetails: ["TODO"],
  },
  {
    highlight: true,
    projectTitle: "Spotify playlist analyzer with nuxt",
    url: "spotify-playlist-analyzer",
    images: [
      "/projects/spotify-playlist-analyzer/1.png",
      "/projects/spotify-playlist-analyzer/2.png",
    ],
    projectType: ProjectType.private,
    projectCategory: ProjectCategory.webApp,
    year: "2022",
    tech: [
      Tech.nuxt,
      Tech.vue,
      Tech.rest,
      Tech.html,
      Tech.css,
      Tech.tailwind,
      Tech.typescript,
    ],

    objectiveDetails: ["TODO"],
    projectDetails: ["TODO"],
  },
]
