import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose
    .connect(
      `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_USER}:${process.env.NEXT_PUBLIC_MONGO_PASSWORD}@${process.env.NEXT_PUBLIC_MONGO_DATABASE_NAME}.s2ajg.mongodb.net/Cluster0?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
      }
    )
    .then((con) => console.log(`connected to local database ${con}`));
};

export default dbConnect;
