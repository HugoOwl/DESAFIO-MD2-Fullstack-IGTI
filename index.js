import express from 'express';
import gradesRouter from './routes/grades.js';

const app = express();

global.jsonGrades = 'grades.json';

app.use(express.json());

app.use('/grade', gradesRouter);
app.listen(3000, () => {
  console.log('Rodando');
});