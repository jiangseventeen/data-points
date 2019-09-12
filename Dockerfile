# Data-points backend image
FROM keymetrics/pm2:8-alpine

MAINTAINER jiangseventeen@gmail.com

COPY . /src/

WORKDIR /src/backend/

# build frontend
RUN cd ../frontend \
    && npm i \
    && npm run build \
    && mv ./dist/* ../backend/public \
    && cd .. \
    && rm -rf frontend

# install dependency of backend
RUN npm i --production

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]





