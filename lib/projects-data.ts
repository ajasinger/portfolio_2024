export const projects = [
    { 
        param: "silvershield",
        name: "Silvershield",
        headerHref: "/images/silvershield_mobile_site_updated.png",
        headerImgAlt: "mobile version of the Silvershield website",
        overview: [
            "A full-stack AI-enabled web application, for family members to monitor their senior relative's emails for fraud.",
            "I built the platform from concept to beta launch and collaborated with the CEO, machine learning developers, designer, and marketing lead to develop and iterate on the product. Silvershield is now in use by beta testers."
        ],
        overviewList: {
            title: "The platform's functionality includes:",
            list: [
                "Integration with Supabase auth and database",
                "CRUD operations for user profiles, and organizations with multiple members",
                "Row Level Security and trigger functions with PostgreSQL",
                "Automated emails with Sendgrid",
                "Communication with multiple APIs and SDKs",
                "Fully responsive frontend"
            ]
        },
        websiteURL: "https://www.silvershield.ai/",
        techStack: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL", "Nylas", "Google Cloud Platform", "OAuth 2.0", "Sendgrid"],
        approach: [
            {
                title: "Overview",
                body: [
                    "When I built the Silvershield platform, I focused on two key things: security and scalability.",
                    "Our users would be trusting us with sensitive data, so keeping it safe was a top priority. The first iteration of the platform analyzes email inboxes for fraud but in the future will also analyze bank accounts, and messages so it needed to be adaptable and scalable.",
                    "Also, with users in their 40s-50s and their senior parents, the interface needed to be both modern and intuitive to a senior user.",
                    "To achieve this I chose to use Next.js, Supabase, Nylas, Sendgrid, Tailwind CSS, and hosted the platform on Vercel."
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
                        body: "The platform required many interactions between the front and back end — displaying dynamic data, and integrating with external APIs and SDKs. Next.js's client and server components, and API routes made this seamless. It also made it easy to keep sensitive data secure on the server side."
                    },
                    {
                        title: "Server side rendering & data fetching:",
                        body: "Server components allowed me to fetch and cache data, where possible, in server components to improve load time for a seamless user experience."
                    },
                    // {
                    //     title: "SEO:",
                    //     body: "As this is a consumer-facing product, another benefit to Next.js is its SEO support, due to server side rendering and customizable meta tags."
                    // },
                ]
            },
            {
                title: "Supabase",
                body: [
                    "Having never built a database before, Supabase allowed me to spin up a secure, scalable relational database quickly."
                ],
                bodyList: [
                    {
                        title: "PostgreSQL:",
                        body: "I knew that we would be storing data about users, their connections to one another and to various datasets and tokens, and Supabase provided the PostgreSQL infrastructure to handle this data with an easy to use SDK. "
                    },
                    {
                        title: "Security:",
                        body: "Supabase authorization in conjunction with Row Level Security and JWTs allowed me easily to customize access to data for individual users."
                    },
                ]
            },
            {
                title: "GCP",
                body: [
                    "Google Cloud Platform provided quick, seamless, and cost effective integration with most users' inboxes."
                ],
                bodyList: [
                    {
                        title: "Efficiency:",
                        body: "After trying Nylas, which we still use for other email providers, I realized that it would improve user experience in terms of user flow and speed to connect directly through GCP."
                    },
                    {
                        title: "Reliability:",
                        body: "Connecting to GCP on behalf of a user requires consistently requesting new access tokens and refreshing the pub/sub watch on the user's inbox. Handling this on our end means we can quickly identify and handle any service interruptions for individual users."
                    },
                ]
            }

        ],
        // solutions: [
        //     {
        //         title: "User permission",
        //         problem: "Multiple family members all needed access to data with varying permission for viewing and updating the data scores. Also, I needed to prevent anyone outside of those family members from accessing the data.",
        //         solution: "My first thought was filtering the data on the front-end, but this was not efficient or secure so I used two Supabase features: Row Level Security (RLS) and JWTs. I created organizations and using RLS, only members could access relevant table rows. I used JWTs to store organization memberships and related roles to easily check membership without a database call, and in conjunction with RLS, check it against table data so any data they don't have permissions for cant be sent to the front-end, adding a layer of security."
        //     },
        //     {
        //         title: "useContext",
        //         problem: "Some users may want to create multiple organizations for different family members, so I wanted it to be easy to toggle between them. Also, when they logged back into our platform I wanted them to view the organization they were viewing when they were last logged in.",
        //         solution: "To solve this I added a 'last_organization' column that could be checked as soon as a user logged in and incorporated a useContext hook. Using that hook I set a platform-wide state for the current organization as that affected many components in the app, so the relevant data was visible across the platform. The downside to useContext is that I had to move a number of database calls from server components to client components, but decided that loss in efficiency was outweighed by avoiding prop drilling."
        //     },
        //     {
        //         title: "Webhooks",
        //         problem: "I needed to receive data on emails as soon as they hit the user's inbox to process them for fraud detection. I set up a Nylas webhook to notify me when a new email was received, but I couldn't figure out how to get the RLS protected access tokens from Supabase to get the email data when a user wasn't logged in to our platform.",
        //         solution: "My first approach was a useEffect to fetch the access token the next time a user logged in, but this didn't allow us to alert users about fraudulent emails in realtime — I solved this with a service role key to bypass RLS. Fetching the token, email data and generating fraud scores timed out in production so I tried a cron job that would periodically check if new 'email_id's had been added to a table and send them to the ML endpoint, but this was inefficient, so I set up a Supabase webhook to trigger a function every time a new 'email_id' was added to the table, to generate a fraud score and notify the user if it was high."
        //     },
        // ],
        solutions: [
            {
                title: "User permission",
                body: "The first major challenge in building the Silvershield platform was keeping sensitive data secure and accessible to multiple users with different permissions. Filtering data on the front-end, even server side, didn't provide as much security as I wanted which led me to two Supabase features: Row Level Security (RLS) and JWTs. By storing membership and permission data in JWTs and checking it against table data with RLS, I could access the necessary data and keep it secure.",
            },
            {
                title: "useContext hook",
                body: "I realized some users would want to create multiple groups and easily switch between them, automatically logging into their most recent group when they came back to the platform. To make this happen, I saved their last group to the profiles table and used the useContext hook to set a platform-wide state for their current group. Although this shift from server-side to client-side database calls meant a loss in efficiency and speed, I felt the improvement in user experience was worth it.",
            },
            {
                title: "Webhooks",
                body: "One of the trickiest problems I encountered was how to notify users as soon as they received a potentially fraudulent email in their connected inbox. I set up a Nylas webhook to alert me when a new email arrived, but the function to fetch additional email data, and process it for fraud kept timing out. I also wanted to avoid saving any email data to our database for security purposes. First, I tried a cron job that would periodically check if new emails had been received and process them, but it was inefficient, so I set up a Supabase webhook to trigger a function every time a new email was received, generating a fraud score and notify the user if it was high.",
            },
        ],
        learnings: [
            {
                title: "Overview",
                body: "If I were to list all the things I learned while developing this project it would be an essay. This project took me from an aspiring coder to a full-fledged software engineer.", 
                learnings: "Some of the things I taught myself while building this project: auth, SMTPs, databases, storage, SDKs, google API, webhooks, cron jobs, edge functions, postgreSQL, Row Level Security, JWTs, Tailwind CSS, and most importantly, debugging and interpreting logs."
            },
            {
                title: "Flexibility",
                body: "You need to write code that's as flexible as possible, especially in the early stages of a product. Our product changed from one that analyzed files, to bank accounts, to inboxes. Since I had broken up my code into reusable components, it was easy to adapt to all these changes.", 
                learnings: "Next time I will spend more time building out a system of nomenclature. I did come up with a few naming conventions like 'user' and 'organization', but as the product changed and the complexity grew, there were some inconsistencies. Now that I have seen how a system grows I'll be better prepared."
            },
            {
                title: "User testing",
                body: "It was so informative watching users move through the (almost) finished product with no intervention. After some user testing I completely restructured the order of operations after a user signs up, to make it more intuitive.",
                learnings: "Have users test the product early and regularly to help inform the build."
            },
            // {
            //     title: "Pair programming",
            //     body: "I hadn't pair programmed before but I was working with the ML engineering team and my POST request to the ML endpoint was failing and we didn't know why. After a few days of emailing back and forth, it took 20 minutes on a zoom call to debug it together.", 
            //     learnings: "When encountering a tricky problem that other developers are involved in, its best to work through it together in realtime."
            // },
            {
                title: "Community",
                body: "This project really showed me how supportive the engineering community is. Between programmers I'd met, Discord groups, and support technicians, I was able to work through problems much more quickly and efficiently than if I had tackled them on my own. Learning to debug from an experienced dev taught me how to approach bugs methodically and strategically.", 
                learnings: "While my first step will still be chatGPT/stackOverflow/Reddit I am now better equipped to know when I need help with something, what to try before going for help, and where to find it."
            },
        ], 
        images: [
            {
                src: "/images/silvershield_dashboard_desktop_2.png",
                tabletSrc: "/images/silvershield_dashboard_tablet.png",
                mobileSrc:"/images/silvershield_dashboard_iPhone_14_2.png",
                alt: "Silvershield dashboard showing an inbox with fraud alerts raning from low to high for each email.",
                // srcHover: "",
                // altHover: ""
            },
            {
                src: "/images/silvershield_settings_desktop_2.png",
                tabletSrc: "/images/silvershield_settings_tablet.png",
                mobileSrc:"/images/silvershield_settings_iPhone_14.png",
                alt: "The Silvershield website settings page dsiplaying first name, last name, email, password, groups the user is a member of, and an edit button.",
                // srcHover: "",
                // altHover: ""
            },
            {
                src: "/images/silvershieldintro-create-group_desktop.png",
                tabletSrc: "/images/silvershield_intro-create-group_tablet.png",
                mobileSrc:"/images/silvershield_intro-create-group_iPhone_14.png",
                alt: "Silvershield webpage to connect an inbox for fraud review with an input to enter an email address and buttons to connect email or skip this step.",
                // srcHover: "/images/silvershield_createOrg_code_3.svg",
                // altHover: "A code snippet for the component that enables users to create a group."
            },
            {
                src: "/images/silvershield_email-view-settings_desktop.png",
                tabletSrc: "/images/silvershield_email-view-settings_tablet.png",
                mobileSrc: "/images/silvershield_email-view-settings_iPhone_14.png",
                alt: "Silvershield webpage to invite members to join your group with inputs for first name, last name, email, group access as an admin ot view only and an invite button.",
                // srcHover: "",
                // altHover: ""
            },
        ],
    },
    { 
        param: "visiblework",
        name: "Visible Work",
        headerHref: "/images/visiblework_mobile_site.png",
        headerImgAlt: "mobile version of the Visible Work website",
        overview: [
            "Visible Work is website built with JavaScript showcasing a personal branding service. I built it to showcase the service and highlight its most compelling features to potential clients. I included a text animation to highlight the company's value proposition as well as a Calendly pop-up for ease of booking.",
        ],
        overviewList: {
            title: "The website includes:",
            list: [
                "A typing animation",
                "Calendly booking pop-ups",
                "Responsive styling with grid and flexbox",
            ]
        },
        websiteURL: "https://visiblework.co/",
        githubURL: "https://github.com/ajasinger/visible-work/",
        techStack: ["JavaScript", "CSS", "Calendly API"],
        approach: [
            {
                title: "approach",
                bodyList: [
                    {
                        title: "Responsive styling:",
                        body: "This was my first time creating a website for public use so I wanted to make sure it was responsive for a wide range of devices. I started with media queries and flexbox, and discovered for layouts that require more control as the window size changes, a grid is often effective."
                    },
                    {
                        title: "Animation:",
                        body: "I knew we wanted something eye catching as soon as a prospective client landed on the homepage so a text animation seemed like the perfect fit. I discovered a technique using just CSS that gradually revealed the word, but I knew this wouldn't be as responsive so I figured out how to create a typing animation using JavaScript."
                    },
                    {
                        title: "Ease of booking:",
                        body: "I wanted users to be able to book a session without being redirected to so I used the Calendly API to make a pop up when I user clicked a button to book a session."
                    },
                    {
                        title: "Accessibility:",
                        body: "I explored accessibility best practices for the first time on this project. To do this I used Lighthouse, WAVE, and VoiceOver. Through this process I discovered that my images weren't labelled descriptively enough and that it was an issue to skip header numbers."
                    },
                ]
            },
        ],
        learnings: [
            {
                bodyList: [
                    {
                        title: "Hosting:",
                        body: "I hosted and published a site with Vercel for the first time and set up the DNS."
                    },
                    {
                        title: "Iterating:",
                        body: "I learned how the design process takes iteration to make sure the design serves the content. As we updated the content, the design needed updating too."
                    },
                    {
                        title: "Accessibility:",
                        body: "Analyzing the accessibility really gave me a new perspective on how different people experience websites. I thought I was cognizant of accessibility while (adding alt text, using high contract colors), but was surprised to find a lot of room for improvement when running it through accessibility tools. In particular, using VoiceOver, I realized how crucial it is that headers are labelled properly and not skipped."
                    },
                ]
            },
        ],
        images: [
            {
                src: "/images/visiblework_calendly_1.png",
                tabletSrc: "/images/visiblework_header_tablet.gif",
                mobileSrc:"/images/visiblework_header_tablet.gif",
                alt: "Visible Work landing page 'What we do' and 'What you get' sections including a 'Join an info session' button",
                srcHover: "/images/visiblework_calendly_3.png",
                altHover: "Visible Work landing page with a pop up covering the screen to book an info session with Calendly"
            },
            {
                src: "/images/visiblework_gif_2.gif",
                tabletSrc: "/images/visiblework_whetyouget_tablet.png",
                mobileSrc:"/images/visiblework_whetyouget_tablet.png",
                alt: "The header on the Visible Work website showing the header with text 'Make your ____ visible' with a text animation cycling through the words work, experience, wins, skills, and insights.",
                // srcHover: "",
                // altHover: ""
            },
        ]
    },
]