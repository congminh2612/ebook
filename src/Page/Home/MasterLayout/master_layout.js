import Footer from "../Themes/Footer/footer";
import Header from "../Themes/Header/header";

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MasterLayout;
