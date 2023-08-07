# use the tag as specified below
FROM node:18-alpine

# create if not exist node_app directory in usr dir and work from there
WORKDIR /usr/node_app

# include package json file and exclude lock file
ADD package.json ./

# install dependencies
RUN yarn install

# copy everything to the work directory
COPY . /usr/node_app/

# begin the app
CMD [ "yarn", "start" ]