# What's the main purpose of this blog? 

This whole blog was basically a experiment for me. I wanted to tryout the combination of Supabase and Prisma, and I can say that it's been pretty fun :)

---

# The stack

Frontend: 
- [Sveltekit](https://kit.svelte.dev) (The routing and Page load features are pretty cool)
- [Tailwindcss](https://tailwindcss.com) (This just make styling everything a lot simpler)

Backend:
- [Supabase](https://supabase.com) (To store the blog posts and stuff)
- [Prisma](https://www.prisma.io) (It really makes everything a lot easier)
- [mdsvex](https://mdsvex.com) (The one and only svelte markdown preprocessor, it's in charge of rendering our markdown into html that we can put on the page)

Deployment:
- [Vercel](https://vercel.com), cause like, why not? (also it's cool)

---

# Problems
Well I've noticed that the post fetching and loading is significantly slower compared to running the website locally. Both versions still make use of Supabase, so most likely it's a result of using Vercel. It used to be significantly slower, but I've since moved my Vercel deployment to the same region as my database. :thumbsup:

<p class="text-link">Click on the posts page to see some cool styling? Maybe?</p>
