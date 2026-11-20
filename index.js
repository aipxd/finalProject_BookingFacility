import "dotenv/config";
import express from "express";
import connectDB from "./config/database.js"
import bookingRoutes from "./routes/bookingRoutes.js"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "API Booking Fasilkom jalan" });
});

app.use("/api/bookings", bookingRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
