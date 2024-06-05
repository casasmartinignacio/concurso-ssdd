import { Router } from 'express';
import studentsController from './students/students.controller.js';
import sseController from './sse/sse.controller.js';

const api = Router()
  .use(studentsController)
  .use(sseController)

export default Router().use('/api', api);