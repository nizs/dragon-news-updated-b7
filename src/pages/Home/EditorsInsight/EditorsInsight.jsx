
import Card from 'react-bootstrap/Card';
import ingistImg1 from '../../../assets/2.png';
import { BsCalendar4 } from "react-icons/bs";

const EditorsInsight = ({ inst }) => {
    const { title, category, date } = inst;
    return (
        <Card className='mb-4'>
            <Card.Img variant="top" src={ingistImg1} />
            <Card.Body>
                <Card.Title className='fs-6 mb-3'>{title}</Card.Title>
                <div>
                    <span className='me-5 fw-bold text-danger' style={{fontSize:'14px'}}>{category}</span>
                    <span className='text-secondary fw-bold text-danger' style={{fontSize:'14px'}}><BsCalendar4 className='me-2 text-danger'/>{date}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default EditorsInsight;