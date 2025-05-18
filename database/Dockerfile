FROM postgres:15
COPY init.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_DB=mydb
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
EXPOSE 5432