# Think Thonk

Think Tonk is a revolutionary interactive application designed for Android mobile devices, empowering users to create personalized quizzes on topics of their choice. Utilizing an advanced artificial intelligence model, the app generates quiz questions, making each quiz unique and challenging. With its user-friendly and intuitive interface, Think Tonk allows users to define various aspects of their quizzes, including the quiz name, number of questions, and desired themes. Based on this input, Think Tonk leverages AI algorithms to create relevant questions, enabling users to test and expand their knowledge across different domains.

One of the key features of Think Tonk is the ability to save quizzes directly on the device. This functionality enables users to play quizzes offline, providing entertainment and learning wherever they are. In essence, Think Tonk is a fun, interactive, and educational tool that infuses elements of gaming into the learning process. Whether users are passionate enthusiasts looking to broaden their knowledge or individuals seeking a delightful way to spend their time, Think Tonk offers an opportunity to learn in a fun and innovative manner.

# Preping your prompt
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
- npm i
- npm run dev

## Frontend
- npm i
- npm run dev
