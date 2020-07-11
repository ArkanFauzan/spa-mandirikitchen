import React from "react"

export class FooterComponent extends React.Component{
    render(){
        return(
            <>
                <div>
                    <br/>
                    <h3>Hubungi kami</h3>
                    0812 xxxx xxxx (A.N. Gunadi) <br/>0821 xxxx xxxx (A.N. Heri)
                </div><br/>
                <div style={{borderTop:"solid 1px black"}}>
                    <br/>
                    Mandiri Kitchen 2020 all rights reserved
                </div><br/>
            </>
        )
    }
}