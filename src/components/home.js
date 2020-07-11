import React from "react"
import { Button} from 'react-bootstrap';

import {Link} from 'react-router-dom'
import {listService} from "./home/service"
import {JumbotronComponenet} from "./home/jumbotron"

export class HomeComponent extends React.Component{
    _handleClick = (event)=>{
        event.preventDefault()
        window.redirect("/products")
    }
    render(){
        return(
            <>
            {/* jumbotron */}
            <JumbotronComponenet />
            
            {/* Card Our service */}
            <div className="row pt-2 bg-light" style={{textAlign:'center'}}>
                {/* menampilkan list service */}
                {listService}

                <div className="my-4 col-12">
                    <Button variant="primary" size="lg" style={{margin:'auto'}}><a style={{color:'white',textDecoration:'none'}} href="/products">Let's See Our Product -&gt;</a></Button>
                </div>
            </div>

            </>
        )
    }
}