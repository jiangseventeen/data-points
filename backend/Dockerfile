# Data-points backend image
FROM keymetrics/pm2:8-alpine

MAINTAINER jiangseventeen@gmail.com

WORKDIR /src/

COPY ./backend/ /src/

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]

RUN npm i --production
