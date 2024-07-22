#!/bin/bash

services=(
  "api-gateway"
  "auth-service"
  "clientes-service"
  "gerentes-service"
  "contas-service"
  "rabbitmq"
  "mysql-database"
  "phpmyadmin"
)

for service in "${services[@]}"; do
  echo "$service - iniciando"
  docker-compose up -d $service
  if [ $? -eq 0 ]; then
    echo "$service - completo"
  else
    echo "$service - falhou ao iniciar"
    exit 1
  fi
  sleep 5
done
