# HTTP Demo Container

## Environment variables

- `PORT` Default listen port is 8000. The port can be changed by setting the env variable `PORT` to another value.
- `VERSION` This can be changed for CI/CD demos and will become `version` in the response json.
- `APP_NAME` This can be changed for demos and will be become `app_name` in the response json.

## Running

```
$ node index.js
Server listening on: http://0.0.0.0:8000
```

```
$ curl http://localhost:8000/foo
{"version": "1.0", "name": "http-demo-container", "url": "/foo"}
```
