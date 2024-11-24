# Full-Stack Application Deployment on DigitalOcean Kubernetes

This project demonstrates the deployment of a full-stack application with a **React frontend** and a **Node.js/Express backend**. The application is hosted on a production server using **DigitalOcean Kubernetes**, with CI/CD pipelines managed via **Jenkins**.

## Project Overview

The primary goal of this project is to establish seamless communication between the frontend and backend components and deploy the integrated application on a production server. The deployment process incorporates best practices for automation and scalability using CI/CD pipelines.

---

## Features

- **Frontend**: Built with React to deliver a modern, responsive user interface.
- **Backend**: Developed using Node.js and Express for a robust REST API.
- **CI/CD Integration**: Jenkins pipelines ensure automated builds, testing, and deployments.
- **Kubernetes Orchestration**: Hosted on a DigitalOcean Kubernetes cluster for scalability and high availability.

---

## Architecture

1. **Frontend**:

   - React application served as static files.
   - Communicates with the backend via RESTful APIs.

2. **Backend**:

   - Node.js and Express for handling API requests.
   - Backend serves the frontend static files in production.

3. **Kubernetes**:

   - DigitalOcean Kubernetes cluster manages containerized frontend and backend services.
   - Load balancer ensures efficient traffic distribution.

4. **CI/CD**:
   - Jenkins automates the build, test, and deployment processes.

---

## Prerequisites

- **Tools**:
  - Node.js and npm installed locally.
  - Docker for containerization.
  - Kubernetes cluster on DigitalOcean.
  - Jenkins server set up and configured.
- **Knowledge**:
  - Familiarity with Docker, Kubernetes, React, Node.js, and CI/CD principles.

---
