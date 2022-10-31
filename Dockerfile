FROM node:14

EXPOSE 8000
WORKDIR /app

COPY . /app

ENV NVM_DIR $HOME/.nvm
ENV NODE_VERSION 16.17.0

RUN npm install -g gatsby-cli
RUN apt-get update
RUN apt-get install curl -y
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# RUN export NVM_DIR="$HOME/.nvm" 
# RUN [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
# RUN nvm install
RUN yarn

ENTRYPOINT ["npm", "start"]