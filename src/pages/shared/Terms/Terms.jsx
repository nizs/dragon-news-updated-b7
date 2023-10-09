import React from 'react';
import { Container , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <Container>
                <div className='text-center'>
                    <h2>This is Our Terms and Condition page</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt molestias ducimus nobis exercitationem unde dicta nemo repellat corrupti officiis laborum nulla incidunt provident minima, natus saepe suscipit velit ut amet libero quam laudantium. Ab repellendus cumque voluptas ex maxime vero est, laboriosam sed, quaerat a labore facilis aspernatur obcaecati? Ullam.</p>
                    <Link to="/signup">
                        <Button className='rounded-0 px-4' variant="dark">Go Back To Register</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Terms;