export type ProjectType = {
    param: string;
    name: string;
    role?: string;
    dates?: string;
    companyDescription?: string;
    overview: string[];
    websiteURL?: string;
    githubURL?: string;
    techStack: string[];
    sections?: ProjectSection[];
    images?: ImageType[];
};

export type ProjectSection = {
    title: string;
    body: string[];
    metric?: string;
};

export type ImageType = {
    src: string;
    tabletSrc: string;
    mobileSrc: string;
    alt: string;
    srcHover?: string;
    altHover?: string;
};
