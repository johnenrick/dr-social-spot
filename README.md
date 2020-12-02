
# How to Set Up

This project is composed of Laravel Application for the backend and VueJS Application for the frontend. These projects are completely separate projects and do not follow the standard monolithic structure.

## Architecture
The Architecture being used for this project is a simplified version of a microservice architecture with API Gateway. This means that frontend and backend can have more than one application or project with completely different technology. The frontend applications communicate to different backend api through a single point called API Gateway.

## Folder Structure
In the project there are two main folders, the **api** which contains the backend applications and **app** which contains the frontend applications. For the sake of simplicity of this test project, we only use one backend application, while the **/app** contains another folder called **dr-social-spot-app/** which is a vue project


