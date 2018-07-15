---
title: API Architecture Tips
author: Ravi
type: post
date: 2011-05-25T18:35:55+00:00
url: /api-architecture-tips/
short-url:
  - http://j.mp/mdDHyH
categories:
  - Blog

---
I am just about to complete a project where my company architected an API for a client. I learned a lot of things during this project. So here are my tips for API architecture .

  1. Never have a single person design an API<br /> A lot can be said about why to do this. A simple answer is when someone thinks of a solution he/she is usually biased towards that solution unless proven wrong. Now to keep the bias in check and if needed challenge an idea you need a second person. Also more people is equal to more ideas . But don’t have a huge team too , it will slow down the entire process. 
  2. Make APIs concise<br /> An API that is not concise is usually hard to understand and implement.<br /> 
  3. Plan for the future<br /> Keep in mind future functionalities the API might have , also make sure that the API is built of simple blocks so that future versions need not have to rewrite the entire API 
  4. Explain everything<br /> A well explained API is a widely used API 
  5. Try to save on network calls if API is used by an Mobile device<br /> Network calls increase latency , thus try to keep them to a minimum. If needed bundle a bunch of APIs into one and let the client decide which API to use.
  6. Push the computation to the server<br /> Not much to explain here, a bunch of servers is any day more powerful than a client machine.

Let me know if you have any feedback