import React from "react"
import { Alert, Card, Button
} from 'react-bootstrap';

import {Link, BrowserRouter as Router} from 'react-router-dom'
import {listService} from "./home/service"
import {JumbotronComponenet} from "./home/jumbotron"

export class HomeComponent extends React.Component{
    render(){
        return(
            <Router>
            {/* jumbotron */}
            <JumbotronComponenet />
            
            {/* Card Our service */}
            <div className="row pt-2 bg-light" style={{textAlign:'center'}}>
                {/* menampilkan list service */}
                {listService}

                <div className="my-4 col-12">
                    <Button variant="primary" size="lg" style={{margin:'auto'}}><Link style={{color:'white',textDecoration:'none'}} to="products">Let's See Our Product -&gt;</Link></Button>
                </div>
            </div>

            </Router>
        )
    }
}