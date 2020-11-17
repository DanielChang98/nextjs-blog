---
title: 'Suggest 3 Ideas to Improve the Situation'
date: '1'
---

# | Analysis
Since the question is related to websites, there are many factors that can cause a slow website or crashing:
1. High Server Load
2. Poorly Written Framework
3. Other Components

# | Why
### 1. High Server Load
When each user accesses the page, they will send requests to the server. High request per second equates to high load. If the server cannot accomodate the requests, the users will experience slow website loading.

When the processing power is at its maximum, bottleneck occurs, causing the website to crash.

### 2. Poorly Written Framework
Because the website shows 500 cryptocurrencies, if all 500 cryptocurrencies are written as one component, this can cause the server to send a large bundle to the user: 

1. If the framework uses client-side rendering, the huge amount of JavaScript can cause slow website loading.
2. Server's resources will be wasted by sending a huge bundle to each user.
3. A change in a single line of code will cause the server to resend the whole bundle again.
4. Having unclean code dampens the performance.

### 3. Other Components
Components like data fetching can take up too much of the system's resources if not being used efficiently. Complex or redundant queries can be vulnerable to high traffic volume. If the page constantly has to update its value, data fetching has to be fast. This applies to APIs as well.

# | Ideas
### 1. Improve Server Performance
This can be done by upgrading server's hardware. With better infrastructure resources, the server can fulfill each request faster. Thus, improving response time and able to accomodate more traffic.

### 2. Adopt Content Distribution Network
This means distributing the load between a network of servers. Data servers can be set-up depending on user's location. Thus, providing faster performance.

### 3. Adopt Load Balancing
With more servers, we can adopt load balancing in the servers. This prepares the website for high volume of traffic. Load balancing distributes the traffic to a group of servers to reduce response time. Hence, less likely for crashing to happen.

### 4. Adopt Code Splitting
We can seperate a huge bundle into their smaller components by using code splitting. With that, changing one component results to the reloading that specific component only. Thus, reducing the server's load and free up more resources.

### 5. Opt for Server-Side Rendering
This means that the server loads the HTML and sends the pre-rendered page to the user. Providing better performance and SEO. Also, the contents of the page will still be updated to real-time values when reloaded.

### 6. Write Cleaner Code
This means reducing any redundant code and reducing the number of files of JavaScript and CSS. This can reduce excessive HTTP requests.