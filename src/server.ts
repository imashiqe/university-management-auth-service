import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`Database is connected Successfully`)

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`Failed to connect database`, err)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

boostrap()
