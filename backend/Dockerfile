FROM node:18-alpine
ENV NODE_ENV=production

COPY . .
COPY ../build ./

RUN npm install
EXPOSE 3001

CMD ["npm", "start"]