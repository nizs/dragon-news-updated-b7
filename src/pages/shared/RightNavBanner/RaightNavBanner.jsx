import { Button, Card } from 'react-bootstrap';
import bannerImg from '../../../assets/bg.png';

const RaightNavBanner = () => {
    return (
        <div className='mt-5 text-center'>
            <Card className="bg-dark text-white">
                <Card.Img src={bannerImg} alt="Card image" />
                <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='mb-4'>Create an Amazing Newspaper</h2>
                    <Card.Text className='mb-5'>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </Card.Text>
                    <Button className='rounded-0 px-4 py-2 fw-bold' variant='danger'>Learn More</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default RaightNavBanner;