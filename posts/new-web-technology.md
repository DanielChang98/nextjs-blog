---
title: 'Tell us About a Newer Web Technology you Like'
date: '3'
---

![NextJS Logo](/nextjs-logo.png)

# | What is Next.js?
Next.js is a **React** web framework that was developed by Vercel. Just like **React**, Next.js requires Node.js  
to be used. Next.js was initially launched on **25th October 2016**, making it 4 years old now.  
> Next.js's slogan is "The React Framework For Production", which we will touch on later.

Also, Next.js has been used by companies like Netflix, Github, Uber and Starbucks.

# | Background Story
In this semester, my group needs to come up with a web application for a school project.  
We decided to take a risk and use React, even though it was not required. However, we discovered  
more and more roadblocks as we planned our project, mainly:  
1. We had no exposure to React and jsx.
2. React router was needed to navigate to other pages.
3. We had to learn about React router on top of React.
4. We are not very proficient with Javascript.

However, I was adamant in using React, since it would benefit us more in the long run.While i was  
doing some research for this question, I came across Next.js and decided to give it a go and  
learn more about it.

# | Have you used it in any project?
This is my **first** project using Next.js! While learning about Next.js, I thought "Why not make my  
CoinGecko application a project?" The project started on 13th November 2020.

Although this project is small scale and simple, I am still happy with my journey in making  
this website. I developed this application following the [Next.js Basic Guide](https://nextjs.org/learn/basics/create-nextjs-app) and tweaked it a little.  
There are many things that can be improved on and I am willing to learn if given more time.

With my basic knowledge about React, I can see why Next.js is a preferred choice for many.

 # | Why I like Next.js

 ### 1. Easy to learn
 While following the [Next.js Basic Guide](https://nextjs.org/learn/basics/create-nextjs-app), the process was not daunting compared to React. The guide  
 was really helpful and easy to follow. Even though I had limited knowledge on React, all the code  
 made sense. This is crucial for beginners, as it encourages them to continue learning it. In short, it  
 did simplify React to be more user-friendly.

 ### 2. Solves all the problems mentioned above
 What impressed me (and sold me) the most was the built-in file-system routing! As compared to React,  
 you can route to other pages by `import Link from 'next/link'` and use the `Link` HTML tag!
 
 As for jsx, it is easy to use once you understood the format. Also, I learnt about using **Markdown Language**  
 to develop a website from the tutorial! There are many libraries that can be imported as well.

 ### 3. Has the same benefits as React
 Since Next.js is a React framework, it has the same benefits of React as well. This means that we can code  
 components and reuse them again. This makes developing frontend much easier and neater compared to  
 using vanilla JS or HTML etc. This applies to the **Fast Refresh** feature too.

 # | How does it compare to others?
 As mentioned in the beginning, Next.js is the React framework built for production.  
 If we compare it to React, the benefits are:
 ### 1. Server Side Rendering
With Next.js, it builds the HTML page at **build time** and sends the pre-rendered page from server to browser  
with minimal JavaScript code. When page is loaded by browser, its JavaScript code runs and makes  
the page fully interactive. (This Process is called **Hydration**)
![Hydration of JS](/hydration.png)

This results in better performance and SEO. As compared to React, which offers **Client Side Rendering**,  
where the web app will not display if without JavaScript.

> Performance study by [LogRocket](https://blog.logrocket.com/next-js-vs-create-react-app/) on SSR vs CSR.

There are other options as well (Static Generation) which you can customize to specific pages.

### 2. Code Splitting
Next.js make code splitting easy compared to React. Code splitting can improve peformance because the user  
receive only the code needed for that page. There are 2 levels to code splitting:
- **Route based** -> All the code related to that route is sent to the user.
- **Components based** -> Only the code for components that are required are sent to the user.

If the component is too large, you can seperate them into smaller chunks and lazy load them too!

### 3. Choice of data fetching
If the page's data is not frequently changed, we can opt for static data fetching. However, we can fetch  
data from the server if required too! (for real time pages)

### 4. File system routing
You can scale your application to thousand of pages! Since only that route is pre-rendered, the performance  
will not be affected.