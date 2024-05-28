export type ProjectType = {
    param: string;
    name: string;
    headerHref: string;
    headerImgAlt: string;
    overview: string[];
    overviewList?: {
        title: string;
        list: string[];
    };
    websiteURL: string;
    githubURL?: string;
    techStack: string[];
    approach: ApproachType[];
    solutions?: SolutionsType[];
    learnings: LearningsType[];
    images: ImageType[];
};

export type ApproachType = {
    title?: string;
    body?: string[];
    bodyList?: { title: string; body: string }[];
};

export type SolutionsType = {
    title: string;
    body: string;
};

export type LearningsType = {
    title?: string;
    body?: string;
    learnings?: string;
    bodyList?: { title: string; body: string }[];
};

export type ImageType = {
    src: string;
    tabletSrc: string;
    mobileSrc: string;
    alt: string;
    srcHover?: string;
    altHover?: string;
};