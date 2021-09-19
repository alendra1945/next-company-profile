import { NextApiRequest, NextApiResponse } from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

const handlerRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    const db = await sqlite.open({
      filename: path.join('./dataCompany.sqlite'),
      driver: sqlite3.Database,
    });
    const { fullname, email, message } = req.body;
    if (!fullname || (!email && !message)) {
      res.status(403).json({
        message: 'fullname,email, and message is required',
      });
    }
    await db.exec(
      `INSERT INTO message(fullname,email,message) VALUES ("${fullname}","${email}","${message}")`
    );
    res.status(200).json({
      message: 'success create messages',
    });
  }
  res.status(404).json({
    message: 'Invalid HTTP Method',
  });
};

export default handlerRequest;
