# Project - "Les Chaises Musicales" <img src="https://github.com/adatechschool/projet-collectif-plateforme-de-meubles-leschaisesmusicales/blob/main/front/src/assets/images/logo.png" width=15% height=15%> 

"Les Chaises Musicales" is a website for selling second-hand furniture, and even antiques, developed as part of a school collective project at **_Ada Tech School_**.

## Project's context

"Les Chaises Musicales" was designed and developed over a period of two weeks with the participation of 10 learners. The participants were divided into two teams of 5 individuals, with one focusing on backend development and the other on frontend. At the end of the first week, the teams switched between the two technology stacks for a better overall understanding of the project.

## Objectives

The project aimed to meet the needs of a client who wanted an interactive website allowing users to sell their furniture. Additionally, the client wanted an admin page to manage product stock.
For us, the major challenge was to learn how to properly communicate through the whole process.

## Task Allocation

### Backend:

![Architecture back](/front/src/assets/images/archi%20back.png "Trello")

- Design and development of the **RESTful API** with **Node.js** and **Express.js**.
- Integration of a database to store product and user information with **AlwaysData**(which manages data hosting in the cloud, in the form of a **MySQL** database.), and **DBeaver** (which is a downloadable graphical interface that allows you to manage the database, visualizes it, and adds/removes tables.).
- Features implementation such as user, product, and order management.

### Frontend:

![Architecture front](/front/src/assets/images/Archi%20front.png "Trello")

- Design and development of the user interface with **JavaScript** and **Vite** framework.
- Use of the **React.js** and **Chakra-UI** libraries to create reusable and dynamic components.
- Integration of features such as page navigation, product filter, display of product details, admin navigation.

## Collaboration and Communication

Collaboration between the two teams was essential to ensure the project's success. Daily meetings were held to share progress, discuss encountered challenges, and align priorities. We used a project management tool, **Trello**, to track tasks and deadlines.

![Organization with Trello](/front/src/assets/images/trello.jpg "Trello")

# Conclusion

"Les Chaises Musicales" is the outcome of intensive teamwork and effective collaboration among project members. Despite the time constraints, the project was successfully delivered, meeting the client's needs and showcasing the skills acquired by the learners during their training.

# How to install and run the project:

1. Create your database (on alwaysdata for example!)
2. To link your database to the project, create a file named 'connexionDB.json' in the 'back' folder and fill it with your informations, following this model :

    `{
    "host": "Tape here the url of your database...",
    "user": "Tape here your user name...",
    "password": "Tape here your password...",
    "database": "Tape here the nam of your DB..."
    }`

3. Go in 'back' folder, open your terminal, and run this command :
    `npm install`
    `npm start`

4. Go in 'front' folder, open your terminal and run this command :
    `npm install`
    `npm run dev`

There you go !

# Credits

1st week front :

- Lise Q.
- Mehdi B.
- Promise H.
- Loïck M.
- Emilie R.

1st week back :

- Gaëtane S.
- Edith M.
- Violaine D.
- Pierre P.
- Jean-Clément

# License

GNU GPL v3.
