
# Welcome to my LifeFront coding challenge!
## Requirements
The challenge:
* Using any publicly available API of your choosing (examples include Yelp, Flickr, New York Times, etc.) build a simple, single-page web app with at least two screens. One screen should show a list of items from that API while the second screen should show a detail view for those items. Use this as an opportunity to be creative and demonstrate your familiarity with frontend web technologies.
* Use React as the view layer.  Feel free to use additional tools or frameworks as you see fit, but avoid relying on fully-styled UI kits like MaterialUI or Blueprint.  
* Tests are required. They may take any form deemed appropriate for the app (such as Jest or Mocha tests) but should demonstrate a basic understanding of testing a single-page web app.
* Minimally, make sure the app functions smoothly on Chrome, Firefox and at least one mobile browser.
* Use of 3rd party libraries for common tasks (networking, etc.) is acceptable.
* Use of open source code included directly in the project should be limited and clearly attributed with a link to the original source.
* Code produced by generative AI is prohibited.
* The app must be placed in a public repo on a site like GitHub or Bitbucket.
* The app must be able to be pulled down from this repo and built without any additional configuration. For example, Livefront should not be responsible for getting its own API keys or access. If an API key and/or username/password is required you can send that to us separately (it does not need to be stored in the repository)
 

### Extra 
* [Best Practices](https://blog.bitsrc.io/react-best-practices-55aca2f38606) 
* Tested doesn't have errors
* Commented appropriately (e.g. comment your public interfaces)
* Edge cases

### Stuff I didn't get too
*   Back button
*   Loader Button
*   Error Banner
*   Theme provider - Dark and Light? Context API
*   PostgresSQL for profile storage of spells
*   Animations for Hero component
*   Authentication
*   Login/Logout
*   ProfilePage
*   Docker

## Installation
 
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Storybook
```bash
pnpm storybook
```
## Jest
```bash
pnpm test
```

## Playwright
```bash
pnpm exec playwright show-report
```

## Deploy on Vercel
This is also live @ https://livefront.vercel.app/

## Public Source Code
This is a Next.js project bootstrapped with [`create-next-app`] included in Tailwind CSS, Storybook, Jest, Playwright, and Vercel.


