import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../Utils/router";
import "./profile.scss";
import { NavBar } from "../../Components/Navbar/navbar";

export const Profile = () => {
    const [user, setUser] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setFormData(parsedUser); // Đặt dữ liệu mặc định cho form
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate(ROUTER.USER.LOGIN);
    };

    const handleDeleteAccount = () => {
        // Thực hiện API xóa tài khoản tại đây
        alert("Tài khoản đã được xóa!");
        localStorage.removeItem("user");
        setUser(null);
        navigate(ROUTER.USER.HOME);
    };

    const handleUpdateInfo = () => {
        // Thực hiện API cập nhật tài khoản tại đây
        alert("Thông tin tài khoản đã được cập nhật!");
        localStorage.setItem("user", JSON.stringify(formData));
        setUser(formData);
        setIsUpdateModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container">
            <NavBar name="Thông tin tài khoản" />
            <div className="profile-container">
                <div className="profile">
                    <h2>Thông tin tài khoản</h2>
                    {user ? (
                        <div className="profile-details">
                            <div className="profile-section">
                                <span>
                                    <strong>Tên người dùng:</strong> {user.name}
                                </span>
                                <span>
                                    <strong>Email:</strong> {user.email}
                                </span>
                                <span>
                                    <strong>Số điện thoại:</strong> {user.phone}
                                </span>
                            </div>
                            <div className="profile-section">
                                <span>
                                    <strong>Giới tính:</strong> {user.gender}
                                </span>
                                <span>
                                    <strong>Ngày sinh:</strong> {user.date_of_birth}
                                </span>
                                <span>
                                    <strong>Địa chỉ:</strong> Hà Nội
                                </span>
                            </div>
                            <div className="profile-actions">
                                <button
                                    className="update-button"
                                    onClick={() => setIsUpdateModalOpen(true)}
                                >
                                    Cập nhật thông tin
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => setIsDeleteConfirmOpen(true)}
                                >
                                    Xóa tài khoản
                                </button>
                                <button className="logout-button" onClick={handleLogout}>
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="loading-text">Đang tải thông tin...</p>
                    )}
                </div>

                {/* Modal cập nhật thông tin */}
                {isUpdateModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Cập nhật thông tin tài khoản</h3>
                            <form>
                                <label>
                                    Tên người dùng:
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name || ""}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email || ""}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Số điện thoại:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone || ""}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Giới tính:
                                    <input
                                        type="text"
                                        name="gender"
                                        value={formData.gender || ""}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Ngày sinh:
                                    <input
                                        type="date"
                                        name="date_of_birth"
                                        value={formData.date_of_birth || ""}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <div className="modal-actions">
                                    <button
                                        type="button"
                                        className="save-button"
                                        onClick={handleUpdateInfo}
                                    >
                                        Lưu
                                    </button>
                                    <button
                                        type="button"
                                        className="cancel-button"
                                        onClick={() => setIsUpdateModalOpen(false)}
                                    >
                                        Hủy
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Xác nhận xóa tài khoản */}
                {isDeleteConfirmOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Bạn có chắc chắn muốn xóa tài khoản?</h3>
                            <div className="modal-actions">
                                <button
                                    className="delete-confirm-button"
                                    onClick={handleDeleteAccount}
                                >
                                    Xóa
                                </button>
                                <button
                                    className="cancel-button"
                                    onClick={() => setIsDeleteConfirmOpen(false)}
                                >
                                    Hủy
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
