
import { Carousel } from 'primereact/carousel';
        
const HomePage = () => {
    return (
        <>
             <Carousel numVisible={1} numScroll={1} orientation="horizontal" verticalViewPortHeight="360px"
            />
        </>
    );
}
 
export default HomePage;