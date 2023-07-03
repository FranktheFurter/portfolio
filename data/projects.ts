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
  rest = "rest api",
  cross = " cross platform",
}
enum ProjectType {
  private = "Private",
  professional = "Professional",
}
enum ProjectCategory {
  webApp = "Web Application",
  mobile = "Mobile Application",
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
  projectCover: string
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
    projectCover: "/projects/blazor-erp/hero.png",
    images: [
      "/projects/blazor-erp/1.png",
      "/projects/blazor-erp/2.png",
      "/projects/blazor-erp/3.png",
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
    projectCover: "/projects/flutter-gol/1.jpg",
    images: [
      "/projects/flutter-gol/1.jpg",
      "/projects/flutter-gol/2.jpg",
      "/projects/flutter-gol/3.jpg",
    ],
    projectType: ProjectType.private,
    projectCategory: ProjectCategory.mobile,
    year: "2022",
    tech: [Tech.flutter, Tech.cross],

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
  // Add more projects here...
]
