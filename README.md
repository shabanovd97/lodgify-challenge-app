# Lodgify - FE Technical Challenge

## Demo
[View the live demo here](https://shabanovd97.github.io/lodgify-challenge-app)

## Description
Tech challenge for [Lodgify](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjulKyehuuKAxWZi1AGHRhSBDoYABAAGgJkZw&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAp4O8BhAkEiwAqv2UqDIGfcmwTEJnfOlNrYYAIxgeg-E4sWKM0fB7ow5xOyYPhlaclaJPyxoCySQQAvD_BwE&ei=SwSBZ8uUIcaAhbIPru3XkQc&ohost=www.google.com&cid=CAESV-D23E38ewL9DhT1KIP-0GXwyrT6Lxpj-VTZm5ZqOAD-I1YOmv0eqfPi61eMpnC720lm_F83jsExJ9kyMjsjBYHdA0jxHeP06jTWUs_W9alGmcHmgJgkUA&sig=AOD64_3U9TjNvJcU9MBCbObjaj4VvzDJ_A&q&sqi=2&adurl&ved=2ahUKEwiL5qaehuuKAxVGQEEAHa72NXIQ0Qx6BAgLEAE)

A React.js application implemented using `Vite` and `styled-components`

## Changelog

[Changelog](https://github.com/shabanovd97/lodgify-challenge-app/blob/develop/CHANGELOG.md)

## Installation

Before start working on project:
1. Clone the repository: `git clone <repo-url>`
1. Navigate to created repository `cd lodgify-challenge-app`
1. Install dependencies with `$ npm install`. In case of error try to update `Node.js` to the latests LTS version

## Instructions

use `$ npm run dev` to start dev server, it will starts the server on [localhost:3000](http://localhost:3000/)\
use `$ npm run build` to prepare production ready bundle\
use `$ npm run preview` to preview locally the production build\
use `$ npm run lint` to run eslint and check the source code with eslint rules\
use `$ npm run lint:fix` to auto fix eslint errors\
use `$ npm run test` to run test suits locally\
use `$ npm run test:watch` to run test suits locally in watch mode

### Release & Deploy

To create a new release & deploy the project:
1. Update project version in the `package.json` file using SemVer versioning format `[MAJOR.MINOR.PATCH]` for example [v1.7.2]
1. Update `CHANGELOG.md` file
1. Run `$ npm install` and then `$ npm run build`
1. Werify is build proccess finished successfully using `$ npm run preview`
1. Merge all necessary changes to `master` branch and switch to it
1. Run `npm run deploy`
1. Create `Release` from the new `Tag`
1. Attach archived `dist` folder while creating `Release`

## Resources

[Technical assignment/specifications](https://lodgify.notion.site/Lodgify-FE-Technical-Challenge-65599fbea9d9436794e12f62d6542c3b)\
[Mockups](https://www.figma.com/file/0HPjyMf6r4ljGKGe4RgqZ3/Accordion-Challenge?type=design&node-id=80-312&mode=design&t=BcB4CjJ60KTM3CSE-0)\
[Interactive prototype](https://www.figma.com/proto/0HPjyMf6r4ljGKGe4RgqZ3/Accordion-Challenge?page-id=0:1&node-id=80:312&viewport=241,48,0.19&scaling=min-zoom)
