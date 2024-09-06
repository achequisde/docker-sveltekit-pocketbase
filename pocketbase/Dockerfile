FROM alpine:latest

COPY . pb
WORKDIR /pb

RUN unzip -o *linux*.zip

CMD [ "./pocketbase", "serve", "--http=0.0.0.0:8090" ]
