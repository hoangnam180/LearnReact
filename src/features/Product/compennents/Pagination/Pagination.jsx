import './Pagination.scss'
const Pagination = (props) => {
    const {count,page,onPageChange} = props;
    
    return (  
        <nav className="pagination_wrapper" aria-label="Page navigation example">
        <ul className="pagination">
          <li 
            onClick={() => page > 1 && onPageChange(page - 1)}
          className={`page-item ${page <= 1 ? 'disabled' : ''}` }>
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {[...Array(count)].map((item, index) => (
            <li
            style={{cursor: 'pointer'}}
            onClick={() => onPageChange(index + 1)}
            key={index} 
            className={`page-item ${page === index+1 ? 'active' : ''}` }><a className="page-link">{index+1}</a>
            </li>
          ))}
          <li
          onClick={() => page < count && onPageChange(page + 1)}
          className={`page-item ${page === count ? 'disabled' : ''}` }>
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
}
 
export default Pagination;