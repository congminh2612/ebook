import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="body">
        <div className="register-container">
      <div className="register-image">
        <img
          src="https://i.pinimg.com/564x/2b/c5/1b/2bc51bedd7c40a78647655ebca148d56.jpg" // Thay bằng đường dẫn hình ảnh bạn muốn hiển thị
          alt="Books"
        />
      </div>
      <div className="register-form">
        <h2 className="register-title">
          <Link to ="/">Ebook</Link>
        </h2>
        <h3>Đăng ký</h3>
        <form>
          <label>Họ và tên *</label>
          <input type="text" placeholder="Nhập họ và tên" required />

          <label>Email *</label>
          <input type="email" placeholder="Nhập email" required />

          <label>Mật khẩu *</label>
          <input type="password" placeholder="Nhập mật khẩu" required />

          <label>Xác nhận lại mật khẩu *</label>
          <input type="password" placeholder="Xác nhận mật khẩu" required />

          <label>Ngày sinh *</label>
          <input type="date" required />

          <label>Giới tính:</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="Nam" /> Nam
            </label>
            <label>
              <input type="radio" name="gender" value="Nữ" /> Nữ
            </label>
          </div>

          <div className="terms">
            <input type="checkbox" required /> Bằng việc bấm vào nút đăng ký, bạn đã chấp nhận
            <a href="#terms"> chính sách bảo mật thông tin</a>.
          </div>

          <button type="submit" className="register-button">Đăng ký</button>
        </form>
        <p className="login-link">
          Bạn đã có tài khoản? <Link to = "/dang-nhap">Đăng nhập</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default RegisterPage;
