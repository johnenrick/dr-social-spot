
# How to Set Up

This project is composed of Laravel Application for the backend and VueJS Application for the frontend. These projects are completely separate projects and do not follow the standard monolithic structure.

## Architecture
The Architecture being used for this project is a simplified version of a microservice architecture with API Gateway. This means that frontend and backend can have more than one application or project with completely different technology. The frontend applications communicate to different backend api through a single point called API Gateway.

## Folder Structure
In the project there are two main folders, the **api** which contains the backend applications and **app** which contains the frontend applications. For the sake of simplicity of this test project, we only use one backend application, while the **/app** contains another folder called **dr-social-spot-app/** which is a vue project


## Setting Up the Backend

Open cmd and go to /api

1. configure .env to match your database configuration
1. run `composer install`
1. run `composer dump-autoload`
1. run `php artisan key:generate`
1. run `php artisan jwt:secret`
1. run `php artisan config:cache`
1. run `php artisan migrate`
1. run `php artisan db:seed`
1. run `php artisan db:seed --class=ServiceRestore`

Take note that the backend can be access direct without running the *php artisan serve*. To check if you set up it correctly, try visiting http://localhost/dr-social-spot/api/public

## Setting Up the Frontend

Open cmd and go to */app/dr-social-spot-app*

1. run `npm install`
1. configure .env.development and match the **VUE_APP_API_URL** with the link to the backend. You can ignore *VUE_APP_FILE_SERVER_URL* because I wasn't able to develop the profile picture :(
1. run `npm run serve`

## Posible errors

**CORS related errors**
Make sure that CORS is allowed in your server application

**Connection Timeout**
Make sure your server is running