# Booking Fasilitas FIK - API

REST API untuk pemesanan fasilitas Fakultas Ilmu Komputer (lab dan ruang diskusi),
dibangun dengan Node.js, Express, dan MongoDB (Mongoose).

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas + Mongoose
- Postman (testing)

## Cara Menjalankan
1. Clone repository
   ```
   git clone https://github.com/USERNAME/booking-fasilkom-api.git
   cd booking-fasilkom-api
   ```
2. Install dependency
   ```
   npm install
   ```
3. Buat file `.env` di root proyek:
   ```
   PORT=3000
   MONGO_URI=isi_connection_string_mongodb_kamu
   ```
4. Jalankan server
   ```
   npm run dev
   ```
5. Server berjalan di `http://localhost:3000`

## Struktur Folder
```
config/       koneksi database
models/       schema Booking
controllers/  logika CRUD
routes/       daftar endpoint
index.js      entry point
```

## Daftar Endpoint

| Method | Endpoint | Fungsi | Status |
|---|---|---|---|
| POST | /api/bookings | Membuat booking baru | 201 |
| GET | /api/bookings | Melihat semua booking (filter: `?ruangan=`, `?status=`) | 200 |
| GET | /api/bookings/:id | Melihat satu booking | 200 / 404 |
| PUT | /api/bookings/:id | Mengubah booking | 200 / 404 |
| DELETE | /api/bookings/:id | Menghapus booking | 200 / 404 |

## Contoh Body (POST)
```json
{
  "namaPemesan": "Adibta Ilham W.",
  "nomorIdentitas": "2510501010",
  "ruangan": "Lab Komputer",
  "tanggal": "2026-11-25",
  "jamMulai": "09:00",
  "jamSelesai": "15:00",
  "keperluan": "Praktikum"
}
```