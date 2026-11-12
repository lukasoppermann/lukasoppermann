---
title: "Design Systems vs. AI: will the robots take over?"
url: "https://medium.com/user-experience-design-1/design-systems-vs-ai-will-the-robots-take-over-1a56be62a74e"
published: "2024-01-05"
excerpt: "Will artificial intelligence (AI) will take over design systems? And will AI have a place in a human-led design system workflow at all."
---

---

![source: https://starwars.fandom.com/wiki/C-series_protocol_droid](https://cdn-images-1.medium.com/max/2400/1*Ejunxc29KiyB1KFkowbdEA.jpeg)

I first discussed this topic in a [meetup at dayone](https://www.linkedin.com/posts/dayone-gmbh_designsysteme-ki-grenzen-ugcPost-7115690926248742912-VPM1) together with [Sarrah Vesselov](https://www.linkedin.com/in/sarrahvesselov/). If you want, you can [view a recording of the talks](https://www.instagram.com/reel/Cx_MOE0MDrA/?igshid=MzRlODBiNWFlZA%3D%3D&utm_content=169623798). Due to the amount of interest, I decided to write some more about it. In this post, I will discuss whether artificial intelligence (AI) will take over design systems. I will also consider if AI has a place in a human-led design system workflow at all.

> **Disclaimer:** I am not an AI expert. If my research does not check out, please let me know.

## What is AI

When people talk about AI, I always picture a robot. Something like C3PO¹ from the Star Wars² movies. C3PO is a humanoid robot that can listen, speak, see, move and interact with the physical world. C3PO can reason about the world and make informed decisions.

Many people probably have a similar picture in their head when they hear AI but it’s wrong.

C3PO is actually an AGI³ (artificial general intelligence). There are many AGIs in movies⁴ but none exists in reality³. Additionally, there are only very few species that have general intelligence. Apart from humans, scientists believe that rodents and primates possess general intelligence⁵.

But if the robots in our minds are a form of AGI, what is AI, and what are the differences? Great question, let's find out.

![Different layers of AI from AGI to ML and DL](https://cdn-images-1.medium.com/max/2400/1*9EnMQ-Y-K6TPoaV7d3P2Ig.jpeg)

### What defines an artificial general intelligence?

Before I get into this, I want to note that this is not a scientific definition. I’m just trying to explain the difference in an easy-to-understand way.

An AGI is a type of intelligent agent³. An intelligent agent⁶ (IA; synonym of AI) tries to achieve goals by perceiving its environment and taking actions on its own. It may improve itself by learning skills or knowledge.

What sets an AGI apart from an AI is that it must be able to achieve or learn to achieve any intellectual task that humans or animals can achieve. An AGI is not required to be sentient⁷ or conscious⁸.

Even though if and when humans will create an AGI is highly debated. From years or decades to centuries or never⁹.

Furthermore, some people, like Eric Schmidt¹⁰, former CEO of Google, think AGIs will require tremendous amounts of computational power. As a result, we would only ever built a few AGIs. Those that would be built would be guarded like atomic weapons¹¹. If true, it is unlikely that an AGI will ever be used for everyday jobs.

### What is an artificial intelligence?

Stanford Professor John McCarthy¹² defined AI as *the science and engineering of making intelligent machines* in 1955¹³. Today we think of them more as clever machines that can solve problems in a similar manner to humans¹³.

There are many definitions for AI models¹⁴ and AI¹⁵ out there. For the context of this post, we use the one Google uses:

> AI is **the broader concept** of enabling a machine or system to sense, reason, act, or adapt like a human.¹⁶

To do this, an AI needs to combine multiple capabilities. Siri and Alexa are often categorized as an AI, e.g. by Apple themselves¹⁷ and by other sources¹⁸ ¹⁹. What they do is combine machine learning²⁰ (ML) algorithms to process your requests.

For example, let’s assume you point your phone’s camera at a vegetable and ask Siri what you can cook with it. The following must happen to get a spoken answer:

1. Your audio must be transformed into text so that the computer can read it. This happens using a speech-to-text²¹ ML model.
2. The text has to be parsed to *understand** the meaning using a natural language processing²² (NLP) ML model.
3. The video from the phone’s camera must be analyzed with a video analyzation model. Using the text from the previous step we know that we are looking for a vegetable in the video. Starting from the center the ML model analyses the picture for vegetables.
4. Once all vegetables are identified, the most likely one will be chosen using predictors like proximity to center, being in focus, etc.
5. A web search for recipes including this vegetable is triggered. Other factors like the time to prepare, amount of ingredients, language of the article, etc. must be consider as well. This could be a fairly “basic” statistical prediction model²³.
6. The title of the recipe has to be transformed into audio using a text-to-speech²⁴ model to allow your phone to return the title in spoken words.

**AI cannot really understand in a way humans do. I am just using this word to explain what happens analog to how we humans would complete the task*

## What is machine learning?

According to McKinsey machine learning is a form of artificial intelligence²⁵. It uses specific algorithms that are trained on data. Those algorithms can perform tasks by themselves²⁶ without specific instructions on how to perform the task.

To achieve this the model needs to be created or “trained” and for this data is required. You can start with a foundation model²⁷, a general model that can do a variety of tasks but needs further training to be useful²⁸. If you use a foundation model, there are five steps to creating an ML model²⁹.

![5 steps to create an ML model](https://cdn-images-1.medium.com/max/2400/1*HpJBdQHoDpoAtMkRBqZhpQ.jpeg)

### Supervised vs. un-supervised learning

**Supervised learning** is the more common approach because it is more accurate³⁰. It works by using labelled data sets as training data. This means you provide the input data and the desired result, e.g. pictures of cats and dogs labeled as such. This way the algorithm can check its results and it is very unlikely to learn something wrong.

Supervised learning is great for *classification*³¹ problems. For example, filtering messages into *spam* and *not spam*. Or if you have a *regression*³² problem. This. means you want to understand the relationship between different variables. This is needed to make predictions for the future e.g. on how an increase in advertising may influence your sales.

**Unsupervised learning** is perfect for discovering unknown patterns in a data set. As the name suggests, it’s done without human intervention. The algorithm gets an unlabeled data set. It then uses self-learning algorithms to infer rules from what it discovers in the data set.

Unsupervised learning is great for association problems. One example is the people who watched this video may also like these videos algorithm. It's also good at clustering³⁴ for example grouping users by age or expertise in a specific field. The other big problem its used for is dimensional reduction³⁵, e.g. noise reduction in audio.

But due to its unsupervised nature, it has a huge potential for unwanted results. For example, it could erroneously interpret bias in a dataset leading to wrong conclusions. A common example is the time that Amazon tried to use AI to help pick the best candidates to fill developer roles. The AI was trained on historical hiring data. Since more men than women work as developers, the algorithm interpreted this as gender being a contributing factor to success. Amazon stopped this project when they found this issue.

![Diagram showing what to use supervised and unsupervised learning for.](https://cdn-images-1.medium.com/max/2400/1*Wtn7tPYUPKTMNliI3BuKaw.jpeg)

### Deep learning

The last aspect to understand is deep learning (DL), which is a subset of machine learning (ML). Every machine learning algorithm uses a neural network³⁷ approach. This means that you have an input layer followed by multiple hidden layers followed by an output layer. Every hidden layer extracts some kind of information from the input.

![Diagram showing the difference between a neural network and a deep learning neural network](https://cdn-images-1.medium.com/max/2400/1*UOXJUJ08mNQcxvUCmlPX6w.jpeg)

Deep learning is define as a network with more than three layers. This means it has multiple layers to progressively extract information³⁸. Those layers include the input and output layer³⁹.

**Deep learning is great** when you work with huge amounts of data. The more data you feed into the algorithm the better it gets⁴⁰. In contrast non-deep learning algorithms plateau so that more data has no effect. One major benefit of deep learning is that in contrast to classical machine learning the data does not need to be labeled⁴¹. Since deep learning uses thousands of raw inputs, this is a huge help.

![Compared flow between normal machine learning and deep learning.](https://cdn-images-1.medium.com/max/2400/1*WKb7WVQYq4rgEHUd4iBXjQ.jpeg)

## What is AI good at?

When I talk about **AI** in this article, I refer to a collection of ML/DL algorithms that work together to complete specific tasks. The following part is writing on this assumption.

**Analyzing big data sets** is one of the first use cases AI was solving. It is essentially a computer problem, and AI is great at any kind of computer problem.

**Finding patterns** is another related computer problem. AI is good at comparing data and finding patterns, even hidden ones. However, we must be careful how we interpret the patterns, and remember the Amazon hiring AI example. Recognizing your face in a picture is a common example.

**Predicting statistical likelihoods** is what large language models (LLMs) like GPT use to create sentences. Basically, the algorithm predicts the likelihood of the next word. For this it considers a certain number of words that come before the current one⁴². GPT-4 for example considers the 37467 words that came before.

**Automating tasks** that are clearly defined is another **computer problem. **This makes it easy for AI as it is, effectively, a computer.

## What is AI bad at?

**Thinking** and **understanding the world** is something only we can do. Imagine you visit a country with a very different culture. For you it is hard to make sense of many things, specifically preferences and rules of behavior. But for people who are born in the other country, it is easy. Their whole life has taught them the **context** of their country. AI is like a visitor in our world and at the moment it just does not have enough context to understand all of it.

Additionally, we make it harder by being very hard to predict. There are no easy rules, like “always to what make most financial sense”. We judge every situation with our internal very fuzzy logic. This logic is partially shared within our culture. But sometimes, it differs between groups, or it only applies in specific situations.

On a date between a man and a woman, it is common in some cultures for the man to pay. While this is an old tradition from times when women were not encouraged to work, it is still expected in some cultures. However, if the same two people get some food during their work break, it is normal for each of them to pay for themselves. This is only one of millions of very specific ideas that could trip up an AI.

Similarly, many things have to just “feel right”. This could be when designing a phone, painting a picture, furnishing an apartment or formulating an email. Often, we can’t describe what makes it “right”, but we have a feeling for it. The problem is that if we can’t tell what “right” is, an AI can’t learn it either.

Lastly, an AI can’t reason⁴³. Reasoning is a way of thinking with the goal to better understand something. But reasoning is very important. For example, to interpret results of an analysis. This is one aspect why we see biases in unsupervised learning that people would notice and fix.

## Context

Generally speaking, an AI’s context is the data the model was trained on, and the input provided by the users. Good context can make an AI much more powerful, while the lack thereof can make it nearly useless⁴⁴.

Some AIs can keep the user input in memory. This means every consecutive request is adding more and more data to the context.

An AI may also add context without user interaction. For example, an AI assistant could parse your emails and calendar events into its context, to better help you plan your day.

The more context is required, the harder it is to make sure an AI has it all. Especially if you don’t know all the context upfront. This is often the case in complex tasks like creating a concept for a product.

This is the quick intro into AI, now let's focus on the other side: design systems.

## What makes up a design system?

To judge if an AI could replace design system designers, we must look into the three aspects required to build a design system:

- **Technology**
- **Understanding** of Business, Users and Customers
- **Experience** of the people building it

![Picture showing the three abstract pillars of a design system: technology, understanding and experience](https://cdn-images-1.medium.com/max/2400/1*osxjKUNJtmyVu3IF6pzMTA.jpeg)

### Technology

Technology is the part we first think of when we talk about design systems. Those are the components, the [design tokens](https://medium.com/p/b73f80f602ab)⁴⁵, the patterns and the test suit.

This part is fairly easy for an AI to do, as it follows very specific rules. Components, for example, are code. Code can be right or wrong, there are bugs and valid code.

Accessibility, while slightly more complex to define, still follows fairly straightforward rules. There must be specific contrast ratios between elements. Components need the correct aria attributes, they need to be focusable, etc.

Additionally, there are a lot of common patterns available that can be used as templates when coding components. For example, by scanning existing design systems. An AI can learn best practices for React or web components and apply them.

With a little bit of training, an AI could probably build components.

### Understanding

This part starts to be problematic for AI. Understanding is not the same as recognizing patterns. When it comes to design systems, we have two user groups to focus on. Firstly, the designers and developers working with the system. And secondly the end users of the products built with the system.

We need to understand both and optimize for them. Sometimes we need to judge for whom we must optimize a component. Should we make it easier to use for the designers and developers? Or is it more important to make it the best ux for our customers? This is a complex cost-to-benefit calculation we intuitively do in our heads.

To understand those user groups, we often conduct user tests. They can be complicated to analyze because there are not yes/no questions. We tend to rely on human intuition to understand where problems lie and how to fix them. Sometimes the user does not even recognize a problem themselves.

We also need to understand the business and optimize the system for it. Sometimes we want to encourage behavior that is better for the business (without going into dark patterns). But deciding when to optimize for business vs. for the user differs for every case. It often relies on the market situation, current feelings of users towards companies and tactics, etc.

We also need to transport the personality of our company into the aesthetic of the design system. This is very hard for AI as there are not a lot of clear facts. As people we have a feeling how a friendly bank differs from a friendly pet store, but it is very hard to turn this into rules a computer could follow.

### Experience

Experience is something that you only notice when you don’t have it. Our entire life is our experience context. We have learned how humans see, understand and feel through endless encounters with people and situations we have mastered. This puts humans in a supreme position to know what people want and need. And this is the essence of design, to build something **for people**. The most important aspect of any product we build is that people can use it.

An AI has a hard time judging if a color feels or looks right or too muddy. It can’t tell if a new component or interaction feels like it fits into the existing system. It can’t know if a specific piece of information is required for the folks at our company or the users of our product. Or if this piece of information is common knowledge for the target audience.

When we humans build products and design systems we just know. We don’t even think about it actively. But it is hard to create rules for this. It is complicated to find specific facts that an AI could use to determine what a user group may or may not know. This is our experience in the world and an AI simply does not have it.

![Process of AI building our apps, starting with prompts to a blackbox AI which outputs apps or design systems.](https://cdn-images-1.medium.com/max/2400/1*1jzLiCBA5QAshsilKLTPMw.jpeg)

## Can AI replace design system designers

There are two ideas people have on how AI could replace design system designers:

1. AI builds products without a design system
2. AI builds the design system

I don’t think either one is feasible, so let's look at why.

### AI builds products without a design system

The idea is that a user, e.g. a product owner, provides a prompt to an AI and it builds a complete product (or at least the frontend).

While this sounds simple in theory, I see a few issues with this:

**Costs**

The only reason to replace humans with AI is cost reduction. Building a product is a lot more than making a fancy design. All screens of a product must look similar and use the same elements and styles. The flows must make sense for both users and the business process. The product must be accessible and provide a great user experience to just name a few aspects.

It may be possible to train an AI to be capable of all this. You could possibly load insights about your users, business goals, products, and flow requirements into the AIs context. But this would require a lot of work and would be expensive. Since all businesses are different, it would also be hard to build an AI that works for everyone. You would probably buy a foundational model. Every business would needs to train this model themselves and retrain if anything changes. This means you know need folks who manage and maintain your internal model.

I don’t think this is going to save anyone money in the next few years.

**Knowledge issues**

AI is great for first mock-ups or fancy pictures you want to show in a client pitch.

The problems start when you want to really build something. Or when you need to finetune an existing product.

Until an AI can really understand the world, the users and our business, it is up to us to prompt it very precisely. If we don’t have designers, we assume product owners (PO) do the prompting. After all they tell designers what is required now, right?

Not quite. POs normally focus on business needs. If you are lucky the PO also knows about the customer's needs. However, most POs have no idea about UX, accessibility, user analysis, design quality, etc. But they need to, if they are supposed to craft prompts and judge the result against all those criteria.

This is probably the biggest hurdle. Replacing the designing of a product may work at some point. But as long as we design for people, we need people to judge if the result is good. This requires a lot of knowledge and experience that you can’t easily learn in an afternoon.

If you build your little side project, this may work but not if you build products at large companies. Products that have to compete with similar products on more than price.

**Hard to finetune and maintain**

Without a design system you don’t really have a lot of rules for your design. With AI you can receive vastly different results every time you prompt something. Every new version of an AI creates better (but very different) results as well. This is bad for products, as you want everything to fit together. Basically, you would need to rebuild the entire app every time you update anything to make sure it fits. And your users would have to deal with visual changes all the time.

Until AI can recreate the exact same result with the same prompt maintaining a product will be a nightmare or require manual work.

### AI builds the design system

Okay, then we prompt the AI to build a design system first and tell the AI to use this design system to build our product.

While this idea, especially the second part, seems more feasible, it still has some issues.

**AI needs rules for building UI**

The rules required to build a cohesive design system are very extensive. If you define everything and load it into the AI’s context you may as well build the design system. It is probably faster.

There is a lot of thought that goes into a design system to make sure it’s a perfect fit for your company.

If you just need something that is okay, there is an easier solution: Buy a pre-built design system. Some are even free. AI just makes it more expensive without adding a lot of benefits.

But what if I need to customize my design system? We have solved this as well, with [design tokens](https://uxdesign.cc/naming-design-tokens-9454818ed7cb).

**Tokens already solve this problem**

Design systems are meant to ease customization and maintainability. Design tokens play a big role in this. You can define your colors, typography, border-radii, and paddings as tokens, and all components will adapt.

This also means you can easily buy a pre-build design system and change the design via design tokens. The system will adjust to fit whatever you provided as tokens.

This is pretty much exactly what an AI would do. But it exists already, it is a lot cheaper, and you have better control over it.

**The black box**

Lastly, you must consider the black box issue⁴⁶. You prompt an AI and get some results, what happens in between those two points is unknown. We can’t find it out, we can’t understand it. This also means it gets really hard to jump in there and adjust stuff when the AI does not do what we want.

A design system that uses AI to create and re-create it, is hard to reason about. This also makes it hard to adjust. This is a problem we don’t have with our current design systems. You have standards, documentation and common frameworks, that make it easy for a developer to adjust a design system, if it doesn’t do what is needed.

This ability is lost with AI. You are 100% in the hands of an AI. If it doesn’t do what you want, you are out of luck. Not a great spot to be in with something so essential to your business as a design system.

So, while AI may be capable of building a design system, it is more expensive, harder to control and maintain.

## We aren’t there yet

![From https://www.youtube.com/watch?v=PeMlggyqz0Y](https://cdn-images-1.medium.com/max/2400/1*ZWdpJcAzQLzLtn2KWnOyUQ.jpeg)

In short, AI is not at a stage where it can easily replace humans who build design systems. We don’t know how slow or quick AI will evolve. It is very hard to understand how big the gap between drawing amazing pictures and building reliable, accessible and consistent components is. But what we know is that while not technically impossible, replacing designers with AI does not seem sensible at the moment.

Firstly, it’s too expensive. From a business perspective AI only brings value if it is cheaper or more reliable than humans, and it is not.

Additionally, we don’t understand our processes enough to automate it. AI could replace an off-the-shelf design system. But it seems very complex to build a component AI that considers our users, company values, accessibility requirements and preferences.

## Outlook

This being said, I am very sure that AI will drastically change our work as system designers.

Here are some of the big changes I could see coming to us soon.

### **Consume and build**

An AI that consumes the design system, either in Figma or code and builds mockup using those components. Airbnb Design did something similar in 2017⁴⁷. So, this would not be a far stretch.

This can be used as a starting point for designers or for product owners to explore solutions. Which feels like it has a lot of potential for bad outcomes. But let’s just hope I am wrong, and we don’t get back to the times where design is not involved in the concept phase.

### **Suggested & assisted search**

I hope to see a lot of small AI advancements in software. I feel this is the most overlooked field. When I open the component panel in Figma, I’d love to get components that I am most likely to use at the top. When I search for a primary or danger button, I would like Figma to suggest the button component but preview it in a state configured to be a danger button. And of course, when I add it to the canvas those configurations should be applied as well.

The AI could even read the design to make better suggestions. Variables and styles could also be sorted depending on the currently selected component.

### **Testing & accessibility**

AI enables a lot of interesting capabilities in software. For example, an *AI user* could navigate through flows in code or in Figma to figure out if there are dead ends. Any accessibility issue could be highlighted automatically in your design tool or code editor. Text contrasts could be checked for every element and alternatives proposed. And the handoff between design and development could be vastly improved by matching the design and code values e.g. design tokens and by adding things like aria roles, etc. automatically for developers.

### **Inspiration / starting point**

With a simple prompt an AI could generate mockups as inspiration (e.g. give me 20 examples of date pickers). Maybe even entire designs using the design system (e.g. I need a registration form with the fields first name, last name, …).

Instead of starting with a blank canvas, designers can start with something and adjust it.

In essence, I can see AI replacing a lot of the manual work, like coding components, or creating initial design mockups. But we will still be needed to fine-tune and judge what is correct. And whenever creative problem solving is required. So, we are not completely dispensable yet.

## References

1. [https://en.wikipedia.org/wiki/C-3PO](https://en.wikipedia.org/wiki/C-3PO)↩︎
2. [https://en.wikipedia.org/wiki/Star_Wars](https://en.wikipedia.org/wiki/Star_Wars)↩︎
3. [https://en.wikipedia.org/wiki/Artificial_general_intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence)↩︎↩︎↩︎
4. [https://en.wikipedia.org/wiki/List_of_artificial_intelligence_films](https://en.wikipedia.org/wiki/List_of_artificial_intelligence_films)↩︎
5. [https://www.eva.mpg.de/documents/Cambridge/Amici_Coexistance_BehBrainSci_2017_2476762.pdf](https://www.eva.mpg.de/documents/Cambridge/Amici_Coexistance_BehBrainSci_2017_2476762.pdf)↩︎
6. [https://en.wikipedia.org/wiki/Intelligent_agent](https://en.wikipedia.org/wiki/Intelligent_agent)↩︎
7. [https://en.wikipedia.org/wiki/Sentience](https://en.wikipedia.org/wiki/Sentience)↩︎
8. [https://en.wikipedia.org/wiki/Consciousness](https://en.wikipedia.org/wiki/Consciousness)↩︎
9. [https://en.wikipedia.org/wiki/Artificial_general_intelligence#:~:text=futures%20studies.-,The%20timeline,-for%20AGI%20development](https://en.wikipedia.org/wiki/Artificial_general_intelligence#:~:text=futures%20studies.-,The%20timeline,-for%20AGI%20development)↩︎
10. [https://en.wikipedia.org/wiki/Eric_Schmidt](https://en.wikipedia.org/wiki/Eric_Schmidt)↩︎
11. [https://youtu.be/PyjQcu-U0yI?si=mgQfCzcMTXdnIQbm&t=106](https://youtu.be/PyjQcu-U0yI?si=mgQfCzcMTXdnIQbm&t=106)↩︎
12. [https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist))↩︎
13. [https://hai.stanford.edu/sites/default/files/2020-09/AI-Definitions-HAI.pdf](https://hai.stanford.edu/sites/default/files/2020-09/AI-Definitions-HAI.pdf)↩︎↩︎
14. [https://www.ibm.com/topics/ai-model](https://www.ibm.com/topics/ai-model)↩︎
15. [https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/artificial-intelligence-vs-machine-learning](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/artificial-intelligence-vs-machine-learning)↩︎
16. [https://cloud.google.com/learn/artificial-intelligence-vs-machine-learning#:~:text=The%20simplest%20way%20to%20understand,and%20learn%20from%20it%20autonomously](https://cloud.google.com/learn/artificial-intelligence-vs-machine-learning#:~:text=The%20simplest%20way%20to%20understand,and%20learn%20from%20it%20autonomously)↩︎
17. [https://www.apple.com/au/siri/#:~:text=intelligent%20assistant](https://www.apple.com/au/siri/#:~:text=intelligent%20assistant)↩︎
18. [https://www.techtarget.com/searchmobilecomputing/definition/Siri#:~:text=Siri%20is%20Apple's%20virtual%20assistant,by%20artificial%20intelligence%20(AI)](https://www.techtarget.com/searchmobilecomputing/definition/Siri#:~:text=Siri%20is%20Apple's%20virtual%20assistant,by%20artificial%20intelligence%20(AI)).↩︎
19. [https://bernardmarr.com/are-alexa-and-siri-considered-ai/](https://bernardmarr.com/are-alexa-and-siri-considered-ai/)↩︎
20. [https://en.wikipedia.org/wiki/Machine_learning](https://en.wikipedia.org/wiki/Machine_learning)↩︎
21. [https://aws.amazon.com/what-is/speech-to-text/#:~:text=act%20on%20it.-,How%20does%20speech%20to%20text%20work%3F,-Speech%20to%20text](https://aws.amazon.com/what-is/speech-to-text/#:~:text=act%20on%20it.-,How%20does%20speech%20to%20text%20work%3F,-Speech%20to%20text)↩︎
22. [https://www.ibm.com/topics/natural-language-processing](https://www.ibm.com/topics/natural-language-processing)↩︎
23. [https://en.wikipedia.org/wiki/Predictive_modelling](https://en.wikipedia.org/wiki/Predictive_modelling)↩︎
24. [https://www.datasciencecentral.com/a-guide-to-how-text-to-speech-works/](https://www.datasciencecentral.com/a-guide-to-how-text-to-speech-works/)↩︎
25. [https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-ai](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-ai)↩︎
26. [https://en.wikipedia.org/wiki/Machine_learning](https://en.wikipedia.org/wiki/Machine_learning)↩︎
27. [https://research.ibm.com/blog/what-are-foundation-models](https://research.ibm.com/blog/what-are-foundation-models)↩︎
28. [https://www.adalovelaceinstitute.org/resource/foundation-models-explainer/#:~:text=Foundation%20models%20are%20AI%20models,5](https://www.adalovelaceinstitute.org/resource/foundation-models-explainer/#:~:text=Foundation%20models%20are%20AI%20models,5)↩︎
29. [https://www.youtube.com/watch?v=jcgaNrC4ElU](https://www.youtube.com/watch?v=jcgaNrC4ElU)↩︎
30. [https://www.youtube.com/watch?v=W01tIRP_Rqs](https://www.youtube.com/watch?v=W01tIRP_Rqs)↩︎
31. [https://en.wikipedia.org/wiki/Statistical_classification](https://en.wikipedia.org/wiki/Statistical_classification)↩︎
32. [https://en.wikipedia.org/wiki/Regression_analysis](https://en.wikipedia.org/wiki/Regression_analysis)↩︎
33. [https://cloud.google.com/discover/what-is-unsupervised-learning#:~:text=Unsupervised%20learning%20in%20artificial%20intelligence,any%20explicit%20guidance%20or%20instruction](https://cloud.google.com/discover/what-is-unsupervised-learning#:~:text=Unsupervised%20learning%20in%20artificial%20intelligence,any%20explicit%20guidance%20or%20instruction).↩︎
34. [https://developers.google.com/machine-learning/clustering/overview](https://developers.google.com/machine-learning/clustering/overview)↩︎
35. [https://machinelearningmastery.com/dimensionality-reduction-for-machine-learning/](https://machinelearningmastery.com/dimensionality-reduction-for-machine-learning/)↩︎
36. [https://www.ml.cmu.edu/news/news-archive/2016-2020/2018/october/amazon-scraps-secret-artificial-intelligence-recruiting-engine-that-showed-biases-against-women.html](https://www.ml.cmu.edu/news/news-archive/2016-2020/2018/october/amazon-scraps-secret-artificial-intelligence-recruiting-engine-that-showed-biases-against-women.html)↩︎
37. [https://aws.amazon.com/what-is/neural-network/#:~:text=A%20neural%20network%20is%20a,that%20resembles%20the%20human%20brain](https://aws.amazon.com/what-is/neural-network/#:~:text=A%20neural%20network%20is%20a,that%20resembles%20the%20human%20brain).↩︎
38. [https://en.wikipedia.org/wiki/Deep_learning](https://en.wikipedia.org/wiki/Deep_learning)↩︎
39. [https://www.youtube.com/watch?v=q6kJ71tEYqM&t=2s](https://www.youtube.com/watch?v=q6kJ71tEYqM&t=2s)↩︎
40. [https://www.mathworks.com/discovery/deep-learning.html#:~:text=A%20key%20advantage%20of%20deep%20learning%20networks%20is%20that%20they%20often%20continue%20to%20improve%20as%20the%20size%20of%20your%20data%20increases](https://www.mathworks.com/discovery/deep-learning.html#:~:text=A%20key%20advantage%20of%20deep%20learning%20networks%20is%20that%20they%20often%20continue%20to%20improve%20as%20the%20size%20of%20your%20data%20increases).↩︎
41. [https://datasolut.com/was-ist-deep-learning/#:~:text=Somit%20liegt%20der%20Hauptunterschied%20zwischen%20Deep%20Learning%20und%20klassischem%20Machine%20Learning%20in%20der%20F%C3%A4higkeit%2C%20durch%20k%C3%BCnstliche%20neuronale%20Netzwerke%20(KNN)%2C%20unstrukturierte%20Daten%20zu%20verarbeiten](https://datasolut.com/was-ist-deep-learning/#:~:text=Somit%20liegt%20der%20Hauptunterschied%20zwischen%20Deep%20Learning%20und%20klassischem%20Machine%20Learning%20in%20der%20F%C3%A4higkeit%2C%20durch%20k%C3%BCnstliche%20neuronale%20Netzwerke%20(KNN)%2C%20unstrukturierte%20Daten%20zu%20verarbeiten).↩︎
42. [https://www.youtube.com/shorts/05o5Y8lueGY](https://www.youtube.com/shorts/05o5Y8lueGY)↩︎
43. [https://medium.com/@addisonmaille58/why-ai-cant-reason-why-humans-can-and-why-reason-matters-81e9283df92a](https://medium.com/@addisonmaille58/why-ai-cant-reason-why-humans-can-and-why-reason-matters-81e9283df92a)↩︎
44. [https://towardsdatascience.com/advancing-machine-intelligence-why-context-is-everything-4bde90fb2d79](https://towardsdatascience.com/advancing-machine-intelligence-why-context-is-everything-4bde90fb2d79)↩︎
45. [https://medium.com/p/b73f80f602ab](https://medium.com/p/b73f80f602ab)↩︎
46. [https://umdearborn.edu/news/ais-mysterious-black-box-problem-explained#:~:text=It%20%E2%80%9Clost%20track%E2%80%9D%20of%20the,a%20couple%20of%20different%20reasons](https://umdearborn.edu/news/ais-mysterious-black-box-problem-explained#:~:text=It%20%E2%80%9Clost%20track%E2%80%9D%20of%20the,a%20couple%20of%20different%20reasons).↩︎
47. [https://airbnb.design/sketching-interfaces/](https://airbnb.design/sketching-interfaces/)↩︎
