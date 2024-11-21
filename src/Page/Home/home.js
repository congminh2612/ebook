import { CardBook } from "../../Components/Card/card"
import "./home.scss"
const HomePage = () => {
    return(
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-3">
                </div> */}
                <div className="col-lg-12 title-book">
                    <span>Sách mới nổi bật</span>
                    <div className="card-book">
                        <CardBook/>
                        <CardBook/>
                        <CardBook/>
                        <CardBook/>
                        <CardBook/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage