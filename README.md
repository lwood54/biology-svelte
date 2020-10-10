### Run Golang Tests

cd into api folder and run:
go test ./...

### Run App

Start backend:
start with launch.json. Ensure you have necessary env variables

Run with docker:
docker-compose down && docker-compose -f docker-compose.dev.yml up --build
use dump file to add data to mysql docker db

Start frontend:
cd into client and run npm run dev
