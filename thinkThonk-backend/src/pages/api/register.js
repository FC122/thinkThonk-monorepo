import { QuickDB } from 'quick.db';
import Cors from 'cors';
import CryptoJS from 'crypto-js';

const db = new QuickDB();
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await db.get(`users.${username}`);
    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    // Encrypt the user registration information
    const encryptedPassword = CryptoJS.AES.encrypt(password, 'encryption_secret').toString();
    console.log(encryptedPassword)
    const userData = { username, password: encryptedPassword };

    // Store the encrypted user registration information
    await db.set(`users.${username}`, userData);
    res.status(200).json({ message: 'User registration successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
