
type navTypes = {
    id: number,
    name: string,
    path: string
}
export const navItems: navTypes[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
];



type portfolioTypes = {
    id: number,
    name: string,}

export const portfolioItems: portfolioTypes[] = [
  { id: 1, name: "ALL" },
  { id: 2, name: "POPULAR" },
  { id: 3, name: "LATEST" },
  { id: 4, name: "FOLLOWING" },
  { id: 5, name: "UPCOMING" },
];


type portfolioDetailsType = {
    id: number,
    img: string,
    name: string,
    type: string,
    category: string,
    description: string,
}

export const portfolioDetails: portfolioDetailsType[] =[
    {
        id: 1,
        img:"/img/portfolio/p1.jpg",
        name: "minimal design",
        type: "Animated, portfolio",
        category: "POPULAR",
       description: "Detailed description of Project One.",
    },
    {
        id: 2,
        img:"/img/portfolio/p2.jpg",
        name: "Paint wall",
        type: "Animated, portfolio",
        category: "POPULAR",
        description: "Detailed description of Project One."
    },
    {
        id: 3,
        img:"/img/portfolio/p3.jpg",
        name: "female light",
        type: "Animated, portfolio",
        category: "POPULAR",
        description: "Detailed description of Project One."
    },
    {
        id: 4,
        img:"/img/portfolio/p4.jpg",
        name: "Lego tower",
        type: "Animated, portfolio",
        category: "LATEST",
        description: "Detailed description of Project One."
    },
    {
        id: 5,
        img:"/img/portfolio/p5.jpg",
        name: "multiply fowl",
        type: "Animated, portfolio",
        category: "LATEST",
        description: "Detailed description of Project One."
    },
    {
        id: 6,
        img:"/img/portfolio/p6.jpg",
        name: "together sign",
        type: "Animated, portfolio",
        category: "FOLLOWING",
        description: "Detailed description of Project One."
    },
    {
        id: 7,
        img:"/img/portfolio/p7.jpg",
        name: "green heaven",
        type: "Animated, portfolio",
        category: "FOLLOWING",
        description: "Detailed description of Project One."
    },
    {
        id: 8,
        img:"/img/portfolio/p8.jpg",
        name: "fly male",
        type: "Animated, portfolio",
        category: "UPCOMING",
        description: "Detailed description of Project One."
    },
    {
        id: 9,
        img:"/img/portfolio/p9.jpg",
        name: "season face",
        type: "Animated, portfolio",
        category: "UPCOMING",
        description: "Detailed description of Project One."
    },
]


type ExperienceSectionType = {
    id: number,
    image: string
}

export const ExperienceSectionData:ExperienceSectionType [] = [
    {
        id:1,
        image: "public/img/brands/logo1.png"
    },
    {
        id:2,
        image: "public/img/brands/logo2.png"
    },
    {
        id:3,
        image: "public/img/brands/logo3.png"
    },
    {
        id:4,
        image: "public/img/brands/logo4.png"
    },
    {
        id:5,
        image: "public/img/brands/logo5.png"
    },
    {
        id:6,
        image: "public/img/brands/logo6.png"
    },
    {
        id:7,
        image: "public/img/brands/logo7.png"
    },
    {
        id:8,
        image: "public/img/brands/logo8.png"
    },
    {
        id:9,
        image: "public/img/brands/logo9.png"
    },
]



type ServiceType = {
    id: number,
    image: string,
    name: string,
    details: string
}

export const ServiceData: ServiceType[] = [
    {
        id:1,
        image:"public/img/services/s1.png",
        name: "Wp developing",
        details:"Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
    {
        id:2,
        image:"public/img/services/s2.png",
        name: "UI/ux design",
        details:"Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
    {
        id:3,
        image:"public/img/services/s3.png",
        name: "Web design",
        details:"Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
    {
        id:4,
        image:"public/img/services/s4.png",
        name: "seo optimize",
        details:"Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
]

type CommentType ={
    id:number,
    image: string,
    name: string,
    details: string,
}

export const CommentData: CommentType [] = [
    {
        id:1,
        image: "public/img/testimonials/t1.jpg",
        name: "Mahmud",
        details: "Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
    {
        id:2,
        image: "public/img/testimonials/t2.jpg",
        name: "Abdulah",
        details: "Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    }
]