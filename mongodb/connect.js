import mongoose from "mongoose";

const connectdb = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log(err));
};
export default connectdb;
