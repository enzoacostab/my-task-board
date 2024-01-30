import { model, Schema } from 'mongoose'

const schema = new Schema({
  'board-id': { 
    type: String,
    require: true,
  },
  'name': {
    type: String,
    required: true,
  },
  'description': {
    type: String,
  },
  'icon': {
    type: Number,
    default: 4,
  },
  'status': {
    type: String,
    enum: ['Won’t do', 'Completed', 'In Progress'],
  }
}, { versionKey: false })

export default model('Task', schema)