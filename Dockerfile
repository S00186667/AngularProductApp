FROM node AS builder 

WORKDIR /RedoProduct-Application

COPY package*.json ./ 

RUN npm install 

COPY . . 

RUN npm run build 

FROM nginx:1.13.12-alpine 

COPY --from=builder /RedoProduct-Application/dist/RedoProduct-Application /usr/share/nginx/html

COPY ./nginx.conf /ect/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT'"$PORT"'/g' /ect/nginx/conf.d/default.conf && nginx -g 'daemon off;'

