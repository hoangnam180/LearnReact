import Album from "../Album";

const AlbumList = ({albumls}) => {
    return ( 
       <>
        <h1>List nhạc</h1>
            <ul className="albuml-list">
                {albumls.map(albuml=>(
                    <li key={albuml.id}>
                        <Album album={albuml}/>
                    </li>
                ))}
            </ul>
       </>
    );
}
 
export default AlbumList;