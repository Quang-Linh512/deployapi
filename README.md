# IoT API Server

API server cho hệ thống IoT với Node.js, Express và MongoDB.

## 🚀 Cài đặt

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Tạo file .env:**
Tạo file `.env` trong thư mục gốc với nội dung:
```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster0.wi3vclj.mongodb.net/iot-database?retryWrites=true&w=majority&appName=Cluster0

# Server Configuration
PORT=3000

# JWT Secret (for authentication)
JWT_SECRET=your-super-secret-jwt-key-here

# Environment
NODE_ENV=development
```

3. **Thay thế thông tin MongoDB:**
- Thay `username` và `password` bằng thông tin thật của bạn
- Hoặc sử dụng MongoDB local: `mongodb://localhost:27017/iot-database`

## 🏃‍♂️ Chạy ứng dụng

```bash
# Development mode
npm start

# Production mode
npm run build
node dist/index.js
```

## 📡 API Endpoints

### Health Check
- `GET /health` - Kiểm tra trạng thái server và database

### Devices
- `GET /api/devices` - Lấy danh sách thiết bị
- `POST /api/devices` - Tạo thiết bị mới

### Sensors
- `GET /api/sensors` - Lấy danh sách cảm biến
- `POST /api/sensors` - Tạo cảm biến mới

## 🔧 Cấu trúc dự án

```
├── index.js          # Entry point
├── package.json      # Dependencies
├── .env              # Environment variables
└── README.md         # Documentation
```

## 🛠️ Troubleshooting

### Lỗi kết nối MongoDB
1. Kiểm tra chuỗi kết nối trong file `.env`
2. Đảm bảo username/password đúng
3. Kiểm tra network connection đến MongoDB Atlas

### Lỗi authentication
- Đảm bảo user có quyền truy cập database
- Kiểm tra IP whitelist trong MongoDB Atlas

## 📝 Ghi chú

- Server sẽ chạy tại `http://localhost:3000`
- Sử dụng nodemon để auto-reload khi development
- API trả về JSON format
