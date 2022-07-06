FROM gradle:7-alpine AS build
WORKDIR /backend
COPY gradle gradle
COPY init-data* init-data
COPY src* src
COPY build.gradle gradlew gradlew.bat settings.gradle ./
RUN gradle build --no-daemon

FROM openjdk:18-alpine AS backend
WORKDIR /backend
COPY init-data* init-data
COPY --from=build /backend/build/libs/cheeseria*SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java","-jar","/backend/app.jar"]