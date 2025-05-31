require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js"); 
const adminRoute = require("./router/admin-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

const corsOptions = {
    origin: "http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}
app.use(cors(corsOptions));
app.use(errorMiddleware);``
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//let define admin route
app.use("/api/admin", adminRoute);

const PORT = 5000;
connectDB().then(() =>{
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

});