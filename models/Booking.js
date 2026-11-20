import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        namaPemesan: { type: String, required: true },
        nomorIdentitas: { type: String, required: true },
        ruangan: {  
            type: String,
            required: true,
            enum: [
                "Lab Komputer", "Lab Jaringan", 
                "Lab Multimedia", "Ruang Diskusi"
            ],
        },
        tanggal: { type: Date, required: true },
        jamMulai: { type: String, required: true },
        jamSelesai: { type: String, required: true },
        keperluan: { type: String },
        status: { 
            type: String,
            enum: ["pending", "disetujui", "ditolak"],
            default: "pending",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);