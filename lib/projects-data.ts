export const projects = [
    {
        param: "simpleclosure",
        name: "SimpleClosure",
        role: "Software Engineer",
        dates: "Nov 2024\u2013Present",
        companyDescription: "SimpleClosure automates the legal, financial, and operational work of shutting down a company.",
        overview: [
            "I own technical design and end-to-end implementation on the projects I lead \u2014 taking features from architecture through to production and mentoring other engineers on complex domains."
        ],
        techStack: ["Next.js", "React", "TypeScript", "GCP", "Firebase", "PostgreSQL", "Stripe API", "Drizzle ORM"],
        sections: [
            {
                title: "People & Entities Layer",
                body: [
                    "Every dissolution involves a web of people and organizations \u2014 founders, lawyers, shareholders, board members \u2014 each with different roles, relationships, and signing responsibilities. Before this system existed, that data lived inconsistently across accounts with no reliable way to query or act on it.",
                    "I designed and built the company\u2019s first unified people-and-entities layer \u2014 a normalized relational data model that tracks every person and organization across all accounts, with deterministic dedup logic, atomic import pipelines, and live signing-state management. It made customer data queryable and usable for the first time and sits underneath the entire dissolution workflow. I now lead other engineers on this domain."
                ],
            },
            {
                title: "Payments Infrastructure",
                body: [
                    "When I joined, billing was entirely manual \u2014 the ops team invoiced customers one by one. I designed and shipped Stripe end-to-end: card and ACH payments, single- and multi-invoice billing, an idempotent webhook pipeline processing 11 event types, refunds, and the full dispute lifecycle.",
                    "The integration now powers billing across the majority of our customers and has returned an estimated 2,000 hours of ops capacity in the past year."
                ],
            },
            {
                title: "Automation Engine",
                body: [
                    "A large category of operational work \u2014 generating and sending documents, triggering downstream tasks, managing account state \u2014 was being done manually, one account at a time. I built the system that eliminated that entirely.",
                    "The automation engine turns manual document work into background jobs with no ops involvement required. I designed the trigger logic, state machine, and dependency cascade end-to-end. It has saved over 1,500 hours of manual work since launch and now runs across 3,100+ accounts."
                ],
            },
            {
                title: "Chat Support Infrastructure",
                body: [
                    "Our support team was resolving paying-client issues over email, with a median time-to-resolution of around 25 hours. I led the end-to-end implementation of a new chat support stack \u2014 from vendor evaluation through to rollout \u2014 including identity-verified chat and a bidirectional sync of account and contact state.",
                    "Median time-to-resolution is now ~2.5 hours. Roughly 10x faster."
                ],
            },
        ],
    },
    {
        param: "silvershield",
        name: "Silvershield",
        role: "Software Engineer (Contract)",
        dates: "Jul 2023\u2013Oct 2024",
        companyDescription: "Silvershield is a full-stack AI-enabled fraud monitoring platform that helps families protect senior relatives from inbox scams.",
        overview: [
            "I built the platform from concept to beta, owning all architecture and technology decisions end-to-end \u2014 selecting the stack, designing the data model, and shipping every feature."
        ],
        techStack: ["Next.js", "Supabase", "PostgreSQL", "GCP", "SendGrid", "Tailwind CSS"],
        solutions: [
            {
                title: "Infrastructure & Security",
                body: "With users trusting the platform with access to sensitive email inboxes, security and data integrity were the primary design constraints. I architected auth, permissions, and data access using Supabase Row Level Security and JWTs across a multi-user, multi-organization structure \u2014 ensuring each user could only access exactly the data they were permitted to see.",
            },
            {
                title: "Performance & Cost",
                body: "The original architecture used Nylas to connect Gmail inboxes for fraud detection. After profiling the system I identified it as both a cost and performance bottleneck and replaced it with a direct GCP integration. The result was a 70% reduction in infrastructure cost and a 90% improvement in processing speed.",
            },
        ],
        images: [
            {
                src: "/images/silvershield_dashboard_desktop_2.png",
                tabletSrc: "/images/silvershield_dashboard_tablet.png",
                mobileSrc: "/images/silvershield_dashboard_iPhone_14_2.png",
                alt: "Silvershield dashboard showing an inbox with fraud alerts ranging from low to high for each email.",
            },
            {
                src: "/images/silvershield_settings_desktop_2.png",
                tabletSrc: "/images/silvershield_settings_tablet.png",
                mobileSrc: "/images/silvershield_settings_iPhone_14.png",
                alt: "The Silvershield website settings page displaying first name, last name, email, password, groups the user is a member of, and an edit button.",
            },
            {
                src: "/images/silvershieldintro-create-group_desktop.png",
                tabletSrc: "/images/silvershield_intro-create-group_tablet.png",
                mobileSrc: "/images/silvershield_intro-create-group_iPhone_14.png",
                alt: "Silvershield webpage to connect an inbox for fraud review with an input to enter an email address and buttons to connect email or skip this step.",
            },
            {
                src: "/images/silvershield_email-view-settings_desktop.png",
                tabletSrc: "/images/silvershield_email-view-settings_tablet.png",
                mobileSrc: "/images/silvershield_email-view-settings_iPhone_14.png",
                alt: "Silvershield webpage to invite members to join your group with inputs for first name, last name, email, group access as an admin or view only and an invite button.",
            },
        ],
    },
]
