import express from 'express';

import userRouter from '../routes/user';

import userController from '../controller/user';

const startServer = () => {
  const app = express();

  app.use('/user', userRouter, userController);

  app.listen(3000, () => {
    console.log('listening...');
  });
};

export default startServer;
