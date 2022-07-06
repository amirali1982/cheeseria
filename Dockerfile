FROM openjdk:18-alpine AS backend
WORKDIR /usr/local
COPY init-data* init-data
COPY build/libs/cheeseria*SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java","-jar","/usr/local/app.jar", "&"]