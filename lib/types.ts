export type ProjectType = {
    param: string;
    name: string;
    role?: string;
    dates?: string;
    companyDescription?: string;
    headerHref?: string;
    headerImgAlt?: string;
    overview: string[];
    websiteURL?: string;
    githubURL?: string;
    techStack: string[];
    solutions?: SolutionsType[];
    sections?: ProjectSection[];
    images?: ImageType[];
};

export type ProjectSection = {
    title: string;
    body: string[];
    metric?: string;
};

export type SolutionsType = {
    title: string;
    body: string;
};

export type ImageType = {
    src: string;
    tabletSrc: string;
    mobileSrc: string;
    alt: string;
    srcHover?: string;
    altHover?: string;
};
