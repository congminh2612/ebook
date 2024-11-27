import axios from "axios";

// URL backend chính xác (sửa lại URL)
const API_BASE_URL = "http://127.0.0.1:5000/api"; // Thay bằng URL backend của bạn

// Hàm POST để thêm hoặc cập nhật sách vào giỏ hàng
export const addToCart = async (userId, bookId, quantity) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/carts`, {
      user_id: userId,
      book_id: bookId,
      quantity: quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Lỗi khi thêm sách vào giỏ hàng"
    );
  }
};
