import React from "react"

export class ListBarang extends React.Component{
    render(){
        const {barang,filter} = this.props;

        // melakukan filter barang
        let barangFilter = barang;
        if(filter!=="semua kategori"){
            barangFilter = barang.filter(value=>{
                return value.kategori===filter
            })
        }

        // membuat list barang berdasarkan barang yang telah difilters
        const list = barangFilter.map((value,index)=>{
            return(
                <div style={{margin:"30px 0px",padding:"0px 10px"}} key={index}>
                    <h3>{index+1}. {value.nama}</h3>
                    <div style={{display:"flex",flexDirection:"column",paddingRight:"20px"}}>
                        <img style={{display:"block",margin:"20px auto", width:"auto"}} src={value.img} />
                        <h4 style={{display:"block",textAlign:"center"}}>{value.deskripsi}</h4>
                        <img style={{display:"block",margin:"20px auto"}} src={value.harga} />
                    </div>
                </div>
            )
        });

        console.log(barangFilter);

        return(
            <>{list}</>
        )
    }
}