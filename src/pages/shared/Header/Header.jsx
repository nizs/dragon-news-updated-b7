import Logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import DragonNavigation from '../DragonNavigation/DragonNavigation';

const Header = () => {

    return (
        <Container>
            <div className='text-center py-4'>
                <img className='img-fluid' src={Logo} alt="dragon_news_logo" />
                <h5 className='text-secondary lh-lg'>Journalism Without Fear or Favour</h5>
                <p className='text-secondary'>{moment().format('dddd, LL')}</p>
            </div>
            <div className='bg-success-subtle p-2 d-flex'>
                <Button className='rounded-0' variant="danger">Latest</Button>
                <Marquee className='text-danger fw-bold' speed={80} pauseOnHover={true}>
                    Charging extra for Dengue test: pvt hospital sealed in Savar     ||      Don't tell women what to wear, UN says after France bans hijab at Olympics     ||     How TikTok's Community Guidelines shape digital discourse
                </Marquee>
            </div>
            <div>
                <DragonNavigation></DragonNavigation>
            </div>
        </Container>
    );
};

export default Header;