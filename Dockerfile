# Data-points backend image
FROM keymetrics/pm2:8-alpine

MAINTAINER jiangseventeen@gmail.com

COPY ./frontend ./backend /src/

WORKDIR /src/backend

# build frontend project
RUN cd ../frontend \ 
    && npm i --production \
    && npm run build \
    && mv ./dist/* ../backend/public

RUN npm i --production && npm run build

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]





