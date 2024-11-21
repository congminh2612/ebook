import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bodylogin">
      <div className="login-container">
      <div className="login-image">
        <img
          src="https://i.pinimg.com/564x/ad/27/17/ad27177ac341711d46a19fe60db109d1.jpg" // Thay bằng đường dẫn hình ảnh bạn muốn hiển thị
          alt="Books"
        />
      </div>
      <div className="login-form">
        <h2 className="login-title">
          <Link to="/">Ebook</Link>
        </h2>
        <h3>Đăng nhập</h3>
        <form>
          <label>Tài khoản *</label>
          <input type="text" placeholder="Nhập tài khoản" required />
          <label>Mật khẩu *</label>
          <input type="password" placeholder="Nhập mật khẩu" required />
          <div className="login-options">
            {/* <label>
              <input type="checkbox" /> Ghi nhớ đăng nhập
            </label> */}
            <a href="#forgot-password" className="forgot-password">Quên mật khẩu?</a>
          </div>
          <button type="submit" className="login-button">Đăng nhập</button>
        </form>
        <div className="social-login">
          <p>Hoặc đăng nhập bằng:</p>
          <button className="google-button">Sign in with Google</button>
          <button className="facebook-button">Continue with Facebook</button>
        </div>
        <p className="register-link">
          Chưa có tài khoản? <Link to="/dang-ky">Đăng ký</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
