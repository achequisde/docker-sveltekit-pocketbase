FROM node:22-alpine as base

COPY . app
WORKDIR /app

FROM base as debug
RUN npm i
CMD [ "npm", "run", "dev", "--", "--host" ]

FROM base as prod
RUN npm i && npm run build
CMD [ "node", "build/index.js" ]
