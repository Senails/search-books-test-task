FROM node:18-alpine
ENV NODE_ENV=production
COPY . .

RUN npm install
EXPOSE 3001

CMD ["npm", "start"]