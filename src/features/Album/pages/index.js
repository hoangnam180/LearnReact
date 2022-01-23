import AlbumList from "../components/AlbumList";

const AlbumFeature = () => {
    const albumls = [
        {
            id: 1,
            name: 'Tổng hợp Erik',
            urlThumnail : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/d/b/6/fdb6dd09284319d58a2423a0b4b6a835.jpg'
        },
        {
            id: 2,
            name: 'Tổng hợp Quân AP',
            urlThumnail : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/a/1/4/4a1406929a6c984209987783c12ec64d.jpg'
        },
        {
            id: 3,
            name: 'Tổng hợp nhạc Hit',
            urlThumnail : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/0/2/9/6/02969eedc024debcb74b8f6b2533e4ce.jpg'
        },
    ]
    return (  
        <AlbumList albumls={albumls}/>
    );
}
 
export default AlbumFeature;