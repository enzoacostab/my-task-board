import { Router } from 'express';
import { getTaskBoard, addTask, updateTask, deleteTask } from '../controllers/task.controller';

const router = Router()

router.get('/:board_id', getTaskBoard)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
router.post('/', addTask)

export default router