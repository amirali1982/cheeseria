# Cheeseria Documentation

### Technical Stack / Considerations
- Spring boot
- React
- OpenApi / Swagger
- H2DB
- JUnit Integration with H2DB.
- Jest Unit Tests for React

### Creating Images and Running the project using Docker

Creating docker image for the backend and frontend

1. In your terminal, change your directory to the project root.
2. From the project root, run the following command to generate docker image for the frontend: `docker build -t cheeseria:frontend ./frontend`
3. From the project root, run the following command to generate the docker image for the backend: `docker build -t cheeseria:backend .`
4. From the project root, run both frontend and backend using: `docker compose up`
5. If you encounter any errors or networking issues in docker then use `docker compose down` or restart the docker. That will most probably solve those kinds of intermittent issues.

#### Cheeseria UI:

Access the Cheeseria UI at: http://localhost:3000/cheeseria-ui

### Setup / Reset Initial Cheeseria Data

Fill-in or reset the data by accessing: http://localhost:8080/cheeseria/reset-cheeseria

#### Postman Collection: 

Find the postman collection in <root>/postman directory if you like to use postman to access the backend api.

#### OpenApi / Swagger:

API Docs: http://localhost:8080/api-docs/

API Docs (yaml file): http://localhost:8080/api-docs.yaml

Swagger Doc: http://localhost:8080/swagger-ui/index.html

### Technical Issues

* With some React 18+ syntax we need to use React Router 6+ otherwise there may be some compatibility issues. However, for this small project React Router 5.3.0 was enough.

### Future Improvements

- Set Cheeseria with an external DB like mysql or postgres instead of in-memory H2 DB for persistence.
- Show estimated costs per items. Currently, I'm showing the total estimated costs to demonstrate my knowledge.
- Improve initial data setup process.
- Add Cheese Image comparison in Integration Tests.
- For the UI, I'm currently using Snapshot testing using Jest, but in the future, for more advanced scenarios, we can also add Dom Testings and Custom Transformers.
- We also need to write tests for price calculation functionalities.
- Add and use Lombok builders.
- Some may argue, keeping backend and frontend together in one repository isn't a good practice. It's currently a small demo project. If it becomes bigger than it's a good idea to decouple it and have their own repositories.
- Upgrade React Router to 6+
- Add multiple image support. (Architectural change)
- UI Improvements to make it more modern.
- SEO Optimize the Cheeseria
- Add pagination or lazy load to the UI.
- Add Cypress e2e test suites.
- Add authentication like Okta.