const Album = ({album}) => {
    return ( 
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.urlThumnail}  album={album.name}/>
            </div>
            <p className="album__name">{album.name}</p>
            
        </div>
     );
}
 
export default Album;