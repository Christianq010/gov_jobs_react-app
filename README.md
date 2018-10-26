# GovJobs.lk front-end app
Deployed here - http://suite-search-lk.surge.sh
## Parcel React boilerplate

> This repo was originally cloned from the following parcel React boilerplate [here](https://github.com/Christianq010/v1-parcel-react-scss-boilerplate).

- Content from the repo from the Front-End Masters react Course - https://btholt.github.io/complete-intro-to-react-v4/

### Install

```bash
# Install npm packages
npm install

# Run development mode
npm run dev

# Build for production
npm run build
```

## Set-up configuration

- This project by default has ESLint and Prettier set up.

- Routing via https://github.com/reach/router (https://btholt.github.io/complete-intro-to-react-v4/reach-router)

- `.babelrc` configured for custom babel setting.

- Styled components used for styling.

## Debugging

Parcel is an ever evolving project that's just getting better. If you run into problems with it not respecting changes (particularly to your `.babelrc` or `.env` files) then delete the `dist/` and the `.cache/` directories. You can do this in bash by running from the root directoy of your project `rm -rf dist/ .cache/` or just by deleting those directories in your editor. This will force Parcel to start over and not cache anything.

- Parcel Docs (https://parceljs.org/)

### Resources

- Tutorial on seeting up Parcel with React and SCSS - https://scotch.io/tutorials/setting-up-a-react-project-with-parcel

- Directory structure example - https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

- React Burger icon - https://github.com/negomi/react-burger-menu
- Burger Menu component tutorial - https://codepen.io/danbuda/post/a-react-navbar-component

### Troubleshoot

- Git Detached HEAD issue _[Solved]_ - https://stackoverflow.com/questions/5772192/how-can-i-reconcile-detached-head-with-master-origin

- babel config issue _[Solved]_ - https://github.com/babel/babel/issues/5006


### Integration with a headless CMS
> Using StoryBlok to create content and the API 
https://www.storyblok.com/docs/Prologue/Introduction

- Use the API docs - https://www.storyblok.com/docs/Delivery-Api/get-a-story

- Use Postman to send a get request with the token provided on storyblok dashboard 
`https://api.storyblok.com/v1/cdn/stories?token=lClgQFxlCzg1pp3obj6aUQtt&cv=1540525479`

- Take JSON data response and turn into structured format to read easier [here](https://jsoneditoronline.org/). 
