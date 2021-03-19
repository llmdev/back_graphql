FROM node:10

WORKDIR /backend

COPY package.json .

RUN npm install


RUN ["chmod", "755", "node_modules"]

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
