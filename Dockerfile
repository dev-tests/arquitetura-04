FROM node:12-alpine
COPY . /usr/share/back-eqi-backoffice
EXPOSE 80
RUN cd /usr/share/back-eqi-backoffice; npm i; npm run build; npm run prod
