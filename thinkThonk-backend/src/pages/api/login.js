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
    const userData = await db.get(`users.${username}`);
    if (userData) {
      // User exists, compare the encrypted password
      console.log(userData.password)
      const decryptedPassword = CryptoJS.AES.decrypt(userData.password, 'encryption_secret').toString(CryptoJS.enc.Utf8);
      if (decryptedPassword === password) {
        // Login successful
        await db.set('loggedInUser', username);
      /*  const keys = await db.all();
        for (const key of keys) {
          await db.delete(key.id);
        }*/
        const data = await db.all();
        console.log(data);
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Invalid credentials
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      // User does not exist
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else if (req.method === 'GET') {
    const loggedInUser = await db.get('loggedInUser');
    if (loggedInUser) {
      res.status(200).json({ message: 'User is logged in', user: loggedInUser });
    } else {
      res.status(401).json({ message: 'User is not logged in' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
