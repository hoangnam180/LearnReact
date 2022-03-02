import './Pagination.scss'
const Pagination = (props) => {
    const {count,page,onPageChange} = props;
    
    return (  
        <nav className="pagination_wrapper" aria-label="Page navigation example">
        <ul className="pagination">
          {[...Array(count)].map((item, index) => (
            <li
            style={{cursor: 'pointer'}}
            onClick={() => onPageChange(index + 1)}
            key={index} 
            className={`page-item ${page === index+1 ? 'active' : ''}` }><a className="page-link">{index+1}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
}
 
export default Pagination;