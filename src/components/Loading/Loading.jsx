import { Spinner } from "reactstrap";

const Loading = () => {
    return (  
        <Spinner animation="border" variant="danger" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}
 
export default Loading;