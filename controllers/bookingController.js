import Booking from "../models/Booking.js";

// CREATE
export const createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json({ message: "Booking berhasil dibuat", data: booking });
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

// READ ALL
export const getBookings = async (req, res) => {
    try {
        const filter = {};
        if (req.query.ruangan) filter.ruangan = req.query.ruangan;
        if (req.query.status) filter.status = req.query.status;

        const bookings = await  Booking.find(filter);
        res.status(200).json({ count: bookings.length, data: bookings });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

// READE ONE
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: `Booking dengan ID ${req.params.id} tidak ditemukan` });
        }
        res.status(200).json({ data: booking })
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
};

// UPDATE
export const updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!booking) {
            return res.status(404).json({ message: "Booking tidak ditemukan" });
        }
        res.status(200).json({ message: "Booking berhasil diupdate", data: booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
export const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: "Booking tidak ditemukan" });
        }
        res.status(200).json({ message: `Booking dengan ID: ${req.params.id} berhasil dihapus` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};