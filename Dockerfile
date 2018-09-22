FROM chris13524/angular-cli:6.2.3

COPY . /app
WORKDIR /app

RUN ng build --prod

FROM nginx:1.15.3

COPY --from=0 /app/dist/client/ /usr/share/nginx/html
