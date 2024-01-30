import { Response, Request } from 'express'
import tasksModel from '../models/task.model'
import { Task } from '../../../types'

export const getTaskBoard = async (req: Request, res: Response) => {
  const { boardId } = req.params
  try {
    const board = await tasksModel.find({ 'board-id': boardId })

    if (board.length === 0) {
      
      const defaultTaskBoard = [
        {
          'board-id': boardId,
          'name': 'Task in Progress',
          'icon': 5,
          'status': 'In Progress'
        }, {
          'board-id': boardId,
          'name': 'Task Completed',
          'icon': 3,
          'status': 'Completed'
        }, {
          'board-id': boardId,
          'name': 'Task Won’t Do',
          'icon': 2,
          'status': 'Won’t do'
        }, {
          'board-id': boardId,
          'name': 'Task To Do',
          'description': 'Work on a Challenge on devChallenges.io, learn TypeScript.', 
          'icon': 4
        },
      ]
      
      const newBoard = await tasksModel.insertMany(defaultTaskBoard)
      return res.json(newBoard)
    }

    return res.json(board)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Server Error')
  }
}

export const addTask = async (req: Request, res: Response) => {
  const boardId: string = req.body['board-id']

  try {
    const newTask = await tasksModel.create({
      'board-id': boardId,
      'name': 'Task To Do',
      'description': 'Work on a Challenge on devChallenges.io, learn TypeScript.', 
      'icon': 4
    })
    
    return res.json(newTask)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      return res.status(400).json({ error: error.message})
    }
  }
}

export const updateTask = async (req: Request, res: Response) => {
  const { body }: { body: Task } = req
  const { id } = req.params

  try {
    await tasksModel.findByIdAndUpdate(id, body)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      return res.status(400).json({ error: error.message})
    }
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await tasksModel.findByIdAndDelete(id)
    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      return res.status(400).json({ error: error.message})
    }
  }
}
