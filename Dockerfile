FROM chris13524/angular-cli:6.2.3

COPY . /app
WORKDIR /app

RUN npm install && npm run build:prerender

FROM nginx:1.15.3

COPY --from=0 /app/dist/browser/ /usr/share/nginx/html
