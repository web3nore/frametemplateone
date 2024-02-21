This is a CTA Carousel Frame Template for Farcaster.

We're looking to make frames more accessible to non-technical users and marketing teams. We're not a development team, but we believe the future of gaming is on-chain, and that social platforms like Farcaster are good for onboarding web2 users and help make our vision a reality. 

Fork this, remix it, do whatever you want to do.

  ggs 
  [Web3 No Re](https://twitter.com/Web3NoRe)

## Getting Started

  

Check the notes on [Notion](https://tarry-silverfish-9ad.notion.site/Frames-For-Non-Devs-c26e43236f224f1194ba17d5c2231eec) to learn how to get up and running.

If you don't have a [Pinata account](https://www.pinata.cloud/), go make one so that you can store your slide images on IPFS. They also helped me out with the original design of this project, so make sure to give them some love.

  Lastly, the system for images is very much hard coded at this point. While we work on a better solution, you are going to need to ***use jpgs as your file format*** and ***name them as numbers based on the order you want them to appear, starting at 0 (ex. 0.jpg, 1.jpg, 2.jpg, etc.).***

## Where to Make Edits
There are a few places to customize this frame to make it your own. Places where edits should be made are commented for visibility and to provide context for what you are changing.

**next.config.mjs** - responsible for handling the page redirects in the CTA. Change the two destinations to wherever you want your frens to go.

  **page.tsx** - responsible for processing the metadata of your frame and the beginning of the user journey. 
  
  **route.ts** - there are two route.ts files, one within the ***frame*** folder and the other within the ***end*** folder. Both are of these folders are subfolders within ***api***. 

Confusing? Probably, but we'll work on that later. In the meantime, just know that **route.ts (frame**)  is where you are defining your sequences and frame layouts, while **route.ts (end**) isn't anything to really worry about.
