# Cheeseria Documentation

### Technical Stack / Considerations
- Spring boot
- React
- OpenApi / Swagger
- H2DB
- JUnit Integration with H2DB. There is not enough business logic in the spring boot app so no unit tests at the moment.

### Start Service
`gradlew bootRun`

### Start UI
`frontend/npm start`

#### Cheeseria UI:
http://localhost:3000/cheeseria

### Setup / Reset Initial Cheeseria Data
http://localhost:8080/cheeseria/reset-cheeseria

#### Postman Collection: 

Find the postman collection in <root>/postman directory.

#### OpenApi / Swagger:

API Docs: http://localhost:8080/api-docs/

API Docs (yaml file): http://localhost:8080/api-docs.yaml

Swagger Doc: http://localhost:8080/swagger-ui/index.html

### Technical Issues

* With some React 18+ syntax we need to use React Router 6+ otherwise there may be some compatibility issues. However, for this small project React Router 5.3.0 was enough.

### Future Improvements

- Set Cheeseria with an external DB like mysql or postgres instead of in-memory H2 DB for persistence.
- Show estimated costs per items. Currently, I'm showing the total estimated costs demonstrate my knowledge.
- Improve initial data setup process.
- Add Cheese Image comparison in Integration Tests.
- Add and use Lombok builders.
- Upgrade React Router to 6+
- Map/Redirect localhost:8080/ to localhost:8080/cheeseria
- Add multiple image support. (Architectural change)
- UI Improvements to make it more modern.
- SEO Optimize the Cheeseria
- Add pagination or lazy load to the UI.
- Add Cypress e2e test suites.
- Add authentication like Okta.