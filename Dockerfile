FROM node:10-alpine

ENV PORT=8000

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:$PORT/ || exit 1

ADD index.js index.js

CMD ["node", "index.js"]
