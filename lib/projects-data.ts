export const projects = [
    { 
        param: "silvershield",
        name: "Silvershield",
        headerHref: "/images/silvershield_mobile_site.png",
        headerImgAlt: "mobile version of the Silvershield website",
        overview: [
            "A full-stack AI-enabled web application, that enables family members to monitor their senior relative's inboxes for fraud.",
            "I built the platform from concept to beta launch and collaborated with the CEO, machine learning developers, designer, and marketing lead to develop the product and iterate. Silvershield is now in use by beta testers."
        ],
        overviewList: {
            title: "The platform's functionality includes:",
            list: [
                "Integration with Supabase auth and database",
                "CRUD operations for user profiles, and organizations with multiple members",
                "Row Level Security and trigger functions with PostgresSQL",
                "Automated emails with Sendgrid",
                "Communication with multiple APIs and SDKs",
                "Fully responsive frontend"
            ]
        },
        websiteURL: "https://www.silvershield.ai/",
        techStack: ["Next.JS", "Supabase", "Tailwind", "PosgresSQL", "Nylas", "Google APIs", "Sendgrid"],
        approach: [
            {
                title: "approach",
                body: [
                    "Security and scalability were the two main concerns when considering how to build Silvershield.ai.",
                    "Our users would be trusting us with sensitive data, so keeping it safe was a top priority. The first iteration of the product analyzes email inboxes for fraud but the intention is to scale to bank accounts, text messages, and physical mail so scalability and adaptability as the product evolves were paramount.",
                    "It also needed to be very user-friendly. Our target user is in the 40s-50s, with their senior parents creating accounts as well, so it needed a modern interface that would also feel intuitive to an elderly user.",
                    "To accomplish this I chose Next.js, Supabase, Nylas, Sendgrid, and Tailwind hosted on Vercel."
                ],
            },
            {
                title: "Next.js",
                body: [
                    "When I started building, we were still figuring out the product so I knew I wanted a component-based framework to make it flexible, adaptable, and scalable. I landed on Next.js for a few reasons:"
                ],
                bodyList: [
                    {
                        title: "Client & server components:",
                        body: "The platform would also require many interactions between the front and back end — displaying dynamic data, and integrating with external APIs and SDKs. Next.js's client and server components, and API routes made this seamless. It also made it easy to keep sensitive data secure on the server side."
                    },
                    {
                        title: "Server side rendering & data fetching:",
                        body: "Server components allowed me to fetch and cache data, where possible, in server components to improve load time and a seamless user experience."
                    },
                    {
                        title: "SEO:",
                        body: "As this is a consumer-facing product, another benefit to Next.js is its SEO support, due to server side rendering and customizable meta tags."
                    },
                ]
            },
            {
                title: "Supabase",
                body: [
                    "Supabase allowed me to spin up a secure, scalable, relational database quickly, and was a particularly good option since I hadn't built a buitl a backend before."
                ],
                bodyList: [
                    {
                        title: "PosgresSQL:",
                        body: "I knew that we would be storing data about users, their connections to one another and to various datasets and tokens, and Supabase provided the PostgreSQL infrastructure to handle this data with an easy to use SDK. "
                    },
                    {
                        title: "Security:",
                        body: "Supabase authorization in conjunction with Row Level Security and JWTs allowed me easily to customize access to data for individual users."
                    },
                ]
            },
            {
                title: "Nylas",
                body: [
                    "Nylas enabled quick integrationg with many email providers."
                ],
                bodyList: [
                    {
                        title: "Efficiency:",
                        body: "Given that we want seniors to connect their inboxes we wanted our platform to be compatible with a wide range of email providers. Instead of integrating individual email email APIs I selected Nylas, as an efficient way to get up and running and test the product. Eventually switch over to individual email APIs for cost saving."
                    },
                ]
            }

        ],
    },
]