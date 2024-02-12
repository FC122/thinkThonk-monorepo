# ThinkThonk Backend Service
Used for generating quizzes
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Endpoints
List of all endpoints
### GET /api/hello
Used for pinging server liveness
### POST /api/login
    {
        "username":"username",
        "password":"password"
    }
### POST /api/quiz
     {
        "questionNumber": 3,
        "subjects": "football"
    }
### POST /api/register
     {
        "username":"username",
        "password":"password"
    }