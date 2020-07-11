import React from "react"
import { Alert, Card, Button
} from 'react-bootstrap';

export function JumbotronComponenet(){
    return(
        <>
            <img src="/img/cv-crop.jpg" width="100%" style={{position:"sticky",top:"0",zIndex:"-1"}} />
            <div style={{backgroundColor:"white"}}>
                <Alert variant="light text-dark">
                    <h1 style={{textAlign:"center"}}>CV Mandiri Kitchen Perkasa</h1>
                    <h2 style={{textAlign:"center"}}>PERALATAN DAPUR RESTORAN</h2>
                </Alert>
                <img style={{display:"block", margin:"auto"}} width="700px" src="img/our-service.jpg" />
            </div>
        </>
    )
}