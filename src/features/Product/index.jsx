import { Container } from "reactstrap";
import './index.scss';
import { Outlet} from "react-router-dom";
const ProductFeature = () => {
    return ( 
        <div className="Container_fluit">
        <Container className="pt-3">
            <Outlet/>
        </Container>
        </div>
     );
}
 
export default ProductFeature;