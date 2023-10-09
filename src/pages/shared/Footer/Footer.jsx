import moment from 'moment';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='bg-dark mt-4'>
            <p className='text-secondary text-center text-white'>Copyright &copy; <Link className='text-danger' to='https://github.com/nizs' target="blank">Tauhid Afser</Link> {moment().format('YYYY')}, A Programming Hero Innitiative</p>
        </Container>
    );
};

export default Footer;