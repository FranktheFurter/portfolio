enum Tech {
  css = "css",
  flutter = "flutter",
  csharp = "c#",
  html = "html",
  javascript = "javascript",
  blazor = "blazor",
  figma = "figma",
}
enum ProjectType {
  private = "Private",
  professional = "Professional",
}
enum ProjectCategory {
  webApp = "Web Application",
}
type Link = {
  icon: string | null
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
      Tech.blazor,
      Tech.figma,
      Tech.javascript,
    ],

    objectiveDetails: [
      "he previous ERP system MyFactory was to be gradually replaced by a new ERP system developed in-house based on Blazor Server.",
    ],
    projectDetails: [
      "Since both the old system MyFactory and the new system are to be operated in parallel, they must be compatible with each other and data must be stored in the same backend.",
      "Users must be able to log in via Active Directory and are assigned various user rights via login",
      "With Blazor and the .Net stack a lot is possible, but to manipulate the DOM directly you have to work with Javascript interop.",
      "Given the large number of possible operations that an ERP system offers, it is very important to integrate these carefully into a UI so that users do not feel overwhelmed by the sheer abundance and the system can be operated intuitively.",
    ],
  },
  // Add more projects here...
]
