FROM node:18.16-bullseye AS development

ENV NODE_ENV development

# Add a work directory
WORKDIR /front-end-navigation

# Cache and Install dependencies
COPY .npmrc .
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy front-end files
COPY . .

# Expose port
EXPOSE 9010

# Start the app
CMD [ "yarn", "start" ]
