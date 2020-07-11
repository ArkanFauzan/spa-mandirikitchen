import React from "react"
import { Card} from 'react-bootstrap';

const service = [
    {
        img:"img/24-7.jpg",
        title:<h3>Full Support & Fast Response</h3>,
        text:<>0812 xxxx xxxx (A.N. Gunadi) <br/>0821 xxxx xxxx (A.N. Heri)</>

    },
    {
        img:"img/quality.png",
        title:<><h3>Kualitas Terjaga</h3><br/></>,
        text:"Kami berkomitmen untuk memberikan produk terbaik"
        
    },
    {
        img:"img/free.jpg",
        title:<><h3>Free Konsultasi, Survei, dan Design </h3></>,
        text:"Kepuasan pelanggan adalah yang utama"
        
    }
];

// membuat list service
export const listService = service.map((value,index)=>{
    return (
        <div key={index} style={{textAlign:"center"}} className="col-12 col-lg-4 my-2">
            <Card style={{ width: '18rem', margin:'auto' }}>
                <Card.Img variant="top" width="286px" height="180px" src={value.img} />
                <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>
                       {value.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
})