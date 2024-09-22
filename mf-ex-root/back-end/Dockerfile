FROM node:18.16-bullseye AS development

ENV NODE_ENV development

# Add a work directory
WORKDIR /back-end

# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy front-end files
COPY . .

# Expose port
EXPOSE 8082

# Start the app
CMD [ "yarn", "start" ]
