import 'dotenv/config'
 
interface Config {
  PORT: number,
  MONGODB_URI: string,
  CLIENT_URL: string
}

export default {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  CLIENT_URL:  process.env.CLIENT_URL || "http://localhost:5173",
} as Config