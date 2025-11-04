# DayLaDau.com – Nền tảng thuê Homestay

Ứng dụng web xây dựng bằng React + Vite + TailwindCSS mô phỏng nền tảng đặt homestay DayLaDau.com. Toàn bộ dữ liệu được lấy từ mock API nội bộ.

## Tính năng chính

- Landing page nổi bật với hero, bộ lọc tìm kiếm, thống kê, điểm đến, trải nghiệm, cảm nhận khách hàng và newsletter.
- Trang danh sách homestay với bộ lọc theo từ khoá, thành phố, số khách, ngân sách.
- Trang chi tiết homestay cung cấp hình ảnh, tiện nghi, điểm nhấn và gợi ý homestay tương tự.
- Trang giới thiệu về DayLaDau và trang liên hệ với form gửi yêu cầu tư vấn.
- Routing đầy đủ với trang 404.

## Khởi chạy dự án

```bash
npm install
npm run dev
```

- Ứng dụng chạy tại `http://localhost:5173` mặc định.
- Dùng `npm run build` để build production.

## Cấu trúc thư mục

```
├── src
│   ├── api          # Mock API lấy dữ liệu
│   ├── components   # Các component tái sử dụng
│   ├── data         # Mock data tĩnh
│   ├── hooks        # Custom hooks
│   ├── pages        # Các trang chính
│   └── main.jsx     # Điểm khởi tạo ứng dụng
```

## Công nghệ sử dụng

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [TailwindCSS 3](https://tailwindcss.com/)
- [React Router 6](https://reactrouter.com/)
- [Heroicons](https://heroicons.com/)
