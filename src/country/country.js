import React from 'react'
// import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

function Country(props) {

    return (
        <Card className="myCards">
            <Card.Body>
                <Card.Title>
                    {props.country.name}
                </Card.Title>
                <Card.Text>
                    Click the following button to get more details
                    <br />
                    <Link to={`/dashboard/${props.country.name}`} className="mylinks" style={{ textDecoration: 'none' }}>
                        <Button variant="primary">Get Details</Button>
                    </Link>
                </Card.Text>
            </Card.Body>

        </Card>

    )
}

export default Country