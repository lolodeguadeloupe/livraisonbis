# Étape 1 : Construire l'application Laravel
FROM composer:2 AS build
WORKDIR /app

# Copiez les fichiers de l'application Laravel
COPY ./livraison /app

# Installez les dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# Étape 2 : Construire l'application front-end avec Node.js
FROM node:18 AS frontend-build
WORKDIR /app

# Copiez les fichiers front-end
COPY ./livraison/resources/js /app

# Installez les dépendances Node.js
RUN npm install

# Lancez le build
RUN npm run build

# Étape 3 : Configurer NGINX et PHP-FPM
FROM nginx:alpine
WORKDIR /app

# Copiez les fichiers de l'application Laravel
COPY --from=build /app /var/www

# Copiez les fichiers front-end construits
COPY --from=frontend-build /app/dist /var/www/public

# Ajoutez la configuration NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiez les certificats SSL
COPY certs /etc/nginx/certs

# Installer PHP et les extensions nécessaires
RUN apk add --no-cache php8 php8-fpm php8-opcache php8-mysqli php8-pdo php8-pdo_mysql php8-mbstring php8-tokenizer php8-xml php8-curl php8-zip php8-gd php8-dom

# Configurer PHP-FPM
COPY php-fpm.conf /etc/php8/php-fpm.d/www.conf

# Exposer les ports
EXPOSE 80
EXPOSE 443

# Démarrer NGINX et PHP-FPM
CMD ["sh", "-c", "php-fpm8 && nginx -g 'daemon off;'"]