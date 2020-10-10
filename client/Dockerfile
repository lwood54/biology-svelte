FROM node:10.6
# TODO switch to yarn
# TODO Switch to yarn export and run with nginx WITH ssl certs
# RUN npm install -g yarn

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
COPY . .
EXPOSE 3000
CMD npm start