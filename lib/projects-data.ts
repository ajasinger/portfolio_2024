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
        solutions: [
            {
                title: "User permission:",
                body: "I needed a group of family members to have joint access to files and data and their corresponding fraud scores, and also for those files and data to only be accessible to them. This could have been accomplished with a number of joined tables and filtering on the front-end but I realized that would result in a lot of calls to Supabase and reduced security so I used two Supabase features: Row Level Security (RLS) and JWTs. JWTs allowed me to attach the organizations they're a member of and their role to the metadata of a token so I could easily check their membership without calling the database. With RLS I could also check this metadata against table data so any data they don't have access to can not be sent to the front-end, adding a layer of security. I did experience an issue where right after the organization was created access was inconsistent, which turned out to be because the JWT wasn't updated to so I had to refresh the token before moving the user to their dashboard. "
            },
            {
                title: "useContext:",
                body: "While it's likely most users would only need one organization for their family, it's possible they'd want to create separate ones for different senior family members, and I wanted to be easy to toggle between them. I incorporated useContext to set a platform-wide state for the current organization as that affected many components in the app. I then realized users would want to view their most recent organization when they logged back in to our platform so I added a last_organization to the profiles table and checked it to set the context as soon as they logged in. The downside to useContext is that I had move a number of database calls from server components to client components to access context and switch out the organization accordingly, but I decided that loss in efficiency was outweighed by avoiding prop drilling."
            },
            {
                title: "Webhooks:",
                body: "After a user connected an email I needed to track emails as they hit the user's inbox. I set up a Nylas webhook to notify my when a new email hit the users inbox, but I couldn't figure out how to then get the protected access tokens from Supabase to get additional data on the email. My first approach was setting up a useEffect so the next time a user logged in I could grab the access token, get the necessary data and sed it to the ML endpoint to generate a fraud score. This, however, didn't allow us to alert users as soon as the email hit the inbox. Ii discovered that I could use a Supabase service role key to bypass RLS to get the necessary data even when a relevant user wasn't logged in so I tried a cron job that would periodically check if new email id's had been added to the table and send them to the ML endpoint, but this was inefficient. I realized I could use Supabase to set up a webhook that would trigger a function every time a new email id was added to the table, that would generate a fraud score and notify the user if the fraud score was above a certain threshold."
            },
        ],
        learnings: [
            {
                title: "Learnings",
                body: "If I were to list all the things I learned while developing this project it would be an (even longer) essay. This project took me from an aspiring coder to a full-fledged software engineer.", 
                learnings: "Things I taught myself while building this project: auth, SMTPs, databases, storage, SDKs, google API, webhooks, cron jobs, edge functions, postgreSQL, Row Level Security, JWTs, Tailwind, and most importantly, debugging interpreting logs."
            },
            {
                title: "Flexibility & Scalability:",
                body: "Making things as flexible as possible, especially when the product is not fully established is crucial. The product changed from one that analyzed all types of files, to bank accounts, until we settled on inboxes. Since, from early on, I had broken up my code into reusable components, it was easy to adapt to all these changes.", 
                learnings: "Next time I will spend more time building out a system of nomenclature. I did come up with a few naming conventions like 'user' and 'organization', as the product changed and the complexity grew and developed, there were some inconsistencies. Now that I have seen how a system grows I'll be better equipped to plan accordingly."
            },
            {
                title: "Adapting to customer feedback:",
                body: "It was incredibly informative watching users move through the (almost) finished product with no intervention. I learned of a few places that weren't intuitive so I completely restructured the flow after a user logs in, which greatly improved understanding and I believe will improve conversion.",
                learnings: "Have users test the product regularly instead of waiting until it's almost complete, identifying other milestones where user interaction could help inform the design and product moving forward."
            },
            {
                title: "Complex problems need live troubleshooting:",
                body: "I hadnt pair programmed before but I was working with the ML engineering team and my POST request to the ML endpoint was failing and we didn't know why. After a few days of emailing back and forth, it took 20 minutes on a zoom call to debug it together.", 
                learnings: "When encountering a tricky problem that other developers are involved in, its best to work through it together in realtime."
            },
            {
                title: "The importance of community (& debugging):",
                body: "This project really showed me how supportive the engineering community is. Between programmers I'd met, Discord groups, and support technicians, I was able to work through problems much more quickly and efficiently than had I tackled them on my own. One of the most transformative hours of my coding career was debugging alongside an experienced dev. It taught me how to approach bugs methodically and strategically.", 
                learnings: "While my first step will still be chatGPT/stackOverflow/Reddit I am now better equipped to know when I need help with something, what to try before going for help, and where to find it."
            },
        ]
    },
]