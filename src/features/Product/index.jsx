import { Container } from "reactstrap";
import ListPage from "./pages/ListPage";
import './index.scss';
const ProductFeature = () => {
    return ( 
        <div className="Container_fluit">
        <Container className="pt-3">
            <ListPage/>
        </Container>
        </div>
     );
}
 
export default ProductFeature;