import { useState } from 'react';
import styles from './Tabs.module.scss';
const Tabs = (props) => {
    const {currentSort,onChange} = props;
    const tabs = [
    {name:'Giá Từ Cao Đến Thấp',value:'salePrice:ASC'},
    {name:'Giá Từ Thấp Đến Cao',value:'salePrice:DESC'}
];
    const [type,setType] = useState(tabs[0].name);

    const handleChange = (index) => {
        setType(tabs[index].name);
        onChange(tabs[index].value);
    }
    return (  
        <ul className={`nav nav-tabs ${styles.nav_tabs}`}>
            {tabs.map((tab, index) => (
                <li 
                onClick={() => handleChange(index)}
                key={index} className="nav-item nav_items">
                    <a className={`nav-link  ${styles.nav_link} ${type === tab.name ? styles.active : ''}`}>{tab.name}</a>
                </li>
            ))}
        </ul>
    );
}
 
export default Tabs;