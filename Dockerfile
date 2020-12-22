FROM node:8.11.4-stretch
COPY . /app
WORKDIR /app

RUN mkdir -p logs && \
    npm install && \
    npm install pm2 -g && \
    npm run dev

EXPOSE 3200
CMD npm run serve && pm2 logs
