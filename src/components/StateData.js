import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Axios from 'axios';

class Statedata extends React.Component {

    constructor() {
        super();
        this.state = {
            stateData : {}
        }
    }

    componentDidMount() {
        Axios.get(`https://api.covid19india.org/state_district_wise.json`)
        .then(res => {
            const result = res.data;
            //console.log(result);
            this.setState({
                stateData: result
            });
        });
    }
    render() {
        const keys = Object.keys(this.state.stateData);
        return (
            keys.map((itm,ky) => {
                let districts = this.state.stateData[itm].districtData;
                //let dist_keys = Object.keys(districts);
                console.log(districts)
                return (
                    <div className="row">
                        <div className="col-md-12">
                        <Accordion defaultActiveKey="0" eventKey={ky}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={ky}>
                                {itm}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                    </div>
                );
            })
        );
}
}

export default Statedata;