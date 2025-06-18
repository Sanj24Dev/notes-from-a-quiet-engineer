const CONFIG = {
    // profile setting (required)
    profile: {
        name: "Sanjana Nayak",
        image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
        role: "firmware developer",
        bio: "I develop everything using C.",
        email: "sanjanagn24@gmail.com",
        linkedin: "sanjana-g-nayak",
        github: "Sanj24Dev",
        instagram: "",
    },
    projects: [{
        name: `notes-from-a-quiet-engineer`,
        href: "https://github.com/Sanj24Dev/notes-from-a-quiet-engineer",
    }, ],
    // blog setting (required)
    blog: {
        title: "notes-from-a-quiet-engineer",
        description: "welcome to notes-from-a-quiet-engineer!",
        scheme: "dark", // 'light' | 'dark' | 'system'
    },

    // CONFIG configration (required)
    link: "https://notes-from-a-quiet-engineer-5i8f-2ebwfev86.vercel.app/",
    since: 2025, // If leave this empty, current year will be used.
    lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
    ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

    // notion configuration (required)
    notionConfig: {
        pageId: process.env.NOTION_PAGE_ID,
    },

    // plugin configuration (optional)
    googleAnalytics: {
        enable: false,
        config: {
            measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
        },
    },
    googleSearchConsole: {
        enable: false,
        config: {
            siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
        },
    },
    naverSearchAdvisor: {
        enable: false,
        config: {
            siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
        },
    },
    utterances: {
        enable: true,
        config: {
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
            "issue-term": "og:title",
            label: "💬 Utterances",
        },
    },
    cusdis: {
        enable: false,
        config: {
            host: "https://cusdis.com",
            appid: "", // Embed Code -> data-app-id value
        },
    },
    isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
    revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }