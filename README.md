# Face Detection App

## 👉[**Try it out here**](https://a-hr-nikolov.github.io/face-detection-app/)

\***NOTE:** Clarifai gets regular updates and many of its services can be offline. This seems to happen quite regularly for the face detection model I'm using. If detection boxes don't load over faces, a fetching error is logged to the console.

[For back-end repo click here](https://github.com/a-hr-nikolov/face-detection-app-api)

---

### **Description**

This is the front end of a full-stack application that integrates third party technologies both on the front and the back end. The main function of the app is to showcase **Clarifai's** face detection model, which can be tested with real and drawn faces alike.

It **_does not_** do recognition, although celebrity faces can be recognized with a different model. However, it is regularly offline and can be a hit or miss, so I decided against using it.

### **Purpose**

The app has some basic functionality, which primarily serves to showcase my ability to consume APIs - both first- and third-party.

Initially, I used Clarifai's RESTful API on the front end, but later moved it to the backend with their recommended gRPC client.

### **Front end built with:**

- React.js + Vite
- Tailwind CSS

The current functionality includes registration, hashing, login, face detection, a simple profile and a simple database integration with PostgreSQL (check it on [the backend repo here](https://github.com/a-hr-nikolov/face-detection-app-api)).

Server hosted on **Render.com** and kept up by a **cron-job.org** service. If the latter is down, the server will take a minute or two to restart after the initial request to it is made.
