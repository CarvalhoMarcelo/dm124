## This is a graduate work using NodeJS for the DM124 discipline.

**Operational System:**

- *Windows 11*
- *WSL2 - Kali Linux 2023.3*

---

**Technologies:**

- *Visual Studio Code 2023 1.82.2 (optional)*
- *Postman 10.17.04 (optional)*
- *NPM 9.2.0 (mandatory install)*
- *NodeJS 18.13.0 (mandatory install)*
- *Docker Engine Community 24.0.7 (mandatory install)*

---

**How to run:**

1. Clone the repository into a single folder to not have path problems. Ex.: `'C:\dm124'` or `'/home/dm124'`

2. Ways to run:
<<<<<<< HEAD
   - The easiest way is through docker-compose file. Go to the folder that you used to clone the repository, for example, C:\dm124, open a terminal or command prompt on it, and type:
=======
   - The easyst way is through docker compose file. Go to the folder that you used to clone the repositoy, for example, C:\dm124, open a terminal or command prompt on it, and type:
>>>>>>> c934a405b62b7f43ad539cc4c585e7b8963b67a9
      - `docker compose up --build`

      </br>      
   - Locally, running service by service
      - Run the below command to bring up the mongodb service
         - `docker run --name mongodb -p 27017:27017 -d mongo`
      - In each project folder execute the command `npm run dev` (Ex.: C:\dm124\auth, C:\dm124\petstore, C:\dm124\foodstore)
      
      </br>      
   - Using Dockerfile and running service by service
      - First thing, run the below commands to create a network and bring up the mongodb service
         - `docker network create network1`
         - `docker run --name mongodb -p 27017:27017 --network network1 -d mongo`
      - In each project folder execute the command that corresponding to each project.
         - `docker run --name auth -p 3001:3001 --network network1 -d <yournamne>/auth` (Obs.:\<yourname>/auth = Ex.: marcelo/auth)
         - `docker run --name petstore -p 3000:3000 --network network1 --env MONGODB_HOST=mongodb AUTH_SERVER=http://auth:3001 -d <yournamne>/petstore` (Obs.:\<yourname>/petstore = Ex.: marcelo/petstore)
         - `docker run --name foodstore -p 3002:3002 --network network1 --env MONGODB_HOST=mongodb AUTH_SERVER=http://auth:3001 -d <yournamne>/foodstore` (Obs.:\<yourname>/foodstore = Ex.: marcelo/foodstore)


3. Use an API Client like Postman to perform the tasks and call the provided endpoints. 

---

**Payload:**

In the folder `docs` there is a file `DM124.postman_collection.json` that you can use to import to your preferred API platform or tool (I've used Postman for this project), so you will have all the endpoints ready and configured to use and test the APIs.

---

**Endpoints:**

If you decide to not import the Postman configured collection that I have exported, below are the endpoints to be used to test the API.

```
--- PetStore Service ---
(POST)   http://localhost:3000/pet                   (create pet)
(PATCH)  http://localhost:3000/pet/caramelo1         (update pet)
(DELETE) http://localhost:3000/pet/caramelo2         (delete pet by name)
(GET)    http://localhost:3000/pet                   (get all pets)
(GET)    http://localhost:3000/pet/?name=caramelo2   (get pet by name)

--- FoodStore Service ---
(POST)   http://localhost:3002/food                                      (create food)
(PATCH)  http://localhost:3002/food/Fresh fish/Medium                    (update food)
(DELETE) http://localhost:3002/food/Fresh fish/Old                       (delete food by name & bag size)
(GET)    http://localhost:3002/food                                      (get all food)
(GET)    http://localhost:3002/food/?foodName=Fresh fish&bagSize=Large   (get fod by name & bag size)

--- Auth Service ---
(POST) http://localhost:3001/auth/login           (generate token based on user and password)
(POST) http://localhost:3001/auth/validateToken   (validate if the token used is a valid token)
```

---

