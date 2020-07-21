import React from 'react';
import { Card } from 'react-bootstrap';
import Statedata from './StateData';

export default function India() {
    return (
        <div className='row'>
            <div className="col-md-12">
                <img src="https://www.countryflags.io/IN/flat/64.png" alt="India Flag" />
                <h3>INDIA1</h3>
            </div>
            <div className="row">
              <div className="col-md-3">
                <Card className="badge badge-primary" style={{ width: '18rem' }}>
                    <Card.Body className="text-center" >
                        <Card.Title>TOTAL CASES</Card.Title>
                        <h3>12341324</h3>
                        <Card.Text >
                            [Today: 3939]
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>  
                <div className="col-md-3">
                <Card className="badge badge-warning" style={{ width: '18rem' }}>
                    <Card.Body className="text-center" >
                        <Card.Title>ACTIVE CASES</Card.Title>
                        <h3>12341324</h3>
                        <Card.Text >
                            [Today: 3939]
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div> 
                <div className="col-md-3">
                <Card className="badge badge-success" style={{ width: '18rem' }}>
                    <Card.Body className="text-center" >
                        <Card.Title>RECOVERED CASES</Card.Title>
                        <h3>12341324</h3>
                        <Card.Text >
                            [Today: 3939]
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div> 
                <div className="col-md-3">
                <Card className="badge badge-danger" style={{ width: '18rem' }}>
                    <Card.Body className="text-center" >
                        <Card.Title>TOTAL DEATHS</Card.Title>
                        <h3>12341324</h3>
                        <Card.Text >
                            [Today: 3939]
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div> 
            </div>
            
            <div className="col-md-12">
                <br />
                <Statedata />
            </div>
        </div>
    );
}