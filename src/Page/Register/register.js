import React, { useState } from "react";
import axios from "axios";
import "./register.scss";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  // State để lưu thông tin form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    gender: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Trạng thái gửi form
  const [error, setError] = useState(null); // Lưu lỗi nếu có
  const [success, setSuccess] = useState(null); // Lưu thông báo thành công

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // POST request
      const response = await axios.post("http://localhost:5000/api/register", formData);
      setSuccess("Đăng ký thành công!");
      setFormData({
        name: "",
        email: "",
        password: "",
        dob: "",
        address: "",
        gender: "",
      });
    } catch (err) {
      setError("Đăng ký thất bại! Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="body">
      <div className="register-container">
        <div className="register-image">
          <img
            src="https://i.pinimg.com/564x/2b/c5/1b/2bc51bedd7c40a78647655ebca148d56.jpg"
            alt="Books"
          />
        </div>
        <div className="register-form">
          <h2 className="register-title">
            <Link to="/">Ebook</Link>
          </h2>
          <h3>Đăng ký</h3>
          <form onSubmit={handleSubmit}>
            <label>Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nhập họ và tên"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email"
              required
            />

            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu"
              required
            />

            <label>Ngày sinh *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />

            <label>Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Nhập địa chỉ"
              required
            />

            <div className="gender-options">
              <label>Giới tính: </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  checked={formData.gender === "Nam"}
                  onChange={handleInputChange}
                />{" "}
                Nam
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  checked={formData.gender === "Nữ"}
                  onChange={handleInputChange}
                />{" "}
                Nữ
              </label>
            </div>

            <div className="terms">
              <input type="checkbox" required className="checkb" /> Bằng việc bấm
              vào nút đăng ký, bạn đã chấp nhận
              <a href="#terms"> chính sách bảo mật thông tin</a>.
            </div>

            <button type="submit" className="register-button" disabled={isSubmitting}>
              {isSubmitting ? "Đang gửi..." : "Đăng ký"}
            </button>
          </form>

          {/* Thông báo lỗi hoặc thành công */}
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <p className="login-link">
            Bạn đã có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
