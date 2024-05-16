import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import TimeDropdown from '../TimeDropdown/TimeDropdown';
import Searchbar from '../SearchBar/Searchbar';
import Cardlist from './Card/Cardlist';
import OCA_User_Journey from './Card/OCA_User_Journey'
import CPQ_User_Journey from './Card/CPQ_User_Journey'
import OSV from './Card/OSV'
import Ecommerce_B2B from './Card/Ecommerce_B2B'
import Ecommerce_B2C from './Card/Ecommerce_B2C'

const ParentCard = () => {
    const [timeUpdater, setTimeUpdater] = useState('5 MINUTES')


    const timeCollector = (time) => {
        setTimeUpdater(time)
    }

    return (
        <div style={{ maxWidth: "100%" }}>
            <div style={{ maxWidth: "95rem", margin: "auto" }}>
                <div>
                    <Row >
                        <Col >
                            <Searchbar setSearchTerm={''} />
                        </Col>
                        <Col md={{ offset: 5 }} >
                            <TimeDropdown timeCollector={timeCollector} />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row xs={1} sm={2} md={2} lg={3} xl={3} >
                        <Cardlist cardName={'Hardware Led Quote User Journey'} timeUpdater={timeUpdater} guid={'Mjc4MTY2N3xOUjF8V09SS0xPQUR8MjAzNzEy'} />
                        <OCA_User_Journey cardName={'OCA User Journey'} timeUpdater={timeUpdater} guid={'Mjc4MTY2N3xOUjF8V09SS0xPQUR8MjAzNzEy'} />
                        <CPQ_User_Journey cardName={'CPQ User Journey'} timeUpdater={timeUpdater} guid={'Mjc4MTY2N3xOUjF8V09SS0xPQUR8MjAzNzEy'} />
                        <OSV cardName={'OSV User Journey'} timeUpdater={timeUpdater} guid={'Mjc4MTY2N3xOUjF8V09SS0xPQUR8MjAzNzEy'} />
                        <Ecommerce_B2B cardName={'Ecommerce B2B User Journey'} timeUpdater={timeUpdater} guid={'Mjc4MTY2N3xOUjF8V09SS0xPQUR8MjAzNzEy'} />
                        <Ecommerce_B2C cardName={'Ecommerce B2C User Journey'} timeUpdater={timeUpdater} guid={'Mjc4MTY2N3xOUjF8V09SS0xPQUR8MjAzNzEy'} />






                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ParentCard;