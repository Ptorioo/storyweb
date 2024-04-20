# Story Web

- Execute these commands sequentially to run this app on your local docker:
```
docker build -t storyweb .
docker run -p 3000:3000 storyweb
```

Or utilize shortcut commands by running the makefile.

- Execute these commands sequentially to compile and run a static production build:

```
npm run build
npm install -g serve
serve -s build
```
