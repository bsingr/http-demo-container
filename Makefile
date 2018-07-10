default: build push

build:
	docker build . -t bsingr/http-demo-container

push:
	docker push bsingr/http-demo-container