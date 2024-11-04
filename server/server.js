const express = require('express');
const path = require("path");
const app = express();
require('dotenv').config();
const { errorHandler } = require("./middleware/errorHandler");


const dbconfig = require('./db')
const roomsroute = require('./routes/roomsroute')
const bookingRoutes = require("./routes/bookingRoute");
const userRoutes = require("./routes/userRoute");

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

app.use('/api/rooms', roomsroute)
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);


app.listen(4040, () => console.log('server running on port 4000'));