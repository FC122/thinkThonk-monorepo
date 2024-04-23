# Think Thonk

Fullstack AI application made with Vue and Next that generates quizes using OpenAI ChatGPT API.

# Preping your prompt
The repo doesn't contain the prompt. You'll have to figure that on your own. This blog I maid could be of help: https://www.barrage.net/blog/technology/the-benefits-of-using-chatgpt-to-improve-your-app
In thinkThonk-monorepo-main/thinkThonk-backend/src/pages/api/quiz.js design prompt that returns quiz body in this format:
```
{
    "quiz": [
        {
            "question": "What is your favorite food?",
            "answers": [
                "Pizza",
                "Burger",
                "Sushi",
                "Pasta"
            ],
            "indexOfTheCorrectAnswer": 0
        }
    ]
}
```
# Instalation

## Backend
- navigate to folder
- npm i
- npm run dev

## Frontend
- navigate to folder
- npm i
- npm run dev
