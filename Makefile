include .env

.PHONY: up

ifeq ($(CONTAINER),)
CONTAINER := $()
endif

up:
	docker-compose up -d --build $(CONTAINER)

.PHONY: stop

stop:
	docker-compose stop $(CONTAINER)

logs:
	docker-compose logs -f