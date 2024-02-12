import axios from 'axios';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(req, res) {

  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    try {
      const { questionNumber, subjects } = req.body;

      let questions = [];
      for (let i = 0; i < questionNumber; i++) {
        let question = {
          "question": "Some question?",
          "answers": ["Answer0", "Answer1", "Answer2", "Answer3"],
          "indexOfTheCorrectAnswer": 3
        };
        questions.push(question);
      }

      const message = JSON.stringify(questions) + process.env.PROMPT_PART_1 + questionNumber + process.env.PROMPT_PART_2 + subjects + process.env.PROMPT_PART_3

      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are a user' }, { role: 'user', content: message }],
      }, {
        headers: {
          'Authorization': process.env.GPT_KEY,
          'Content-Type': 'application/json',
        },
      });
      const quiz = JSON.parse(response.data.choices[0].message.content);

      res.status(200).json({ quiz });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}