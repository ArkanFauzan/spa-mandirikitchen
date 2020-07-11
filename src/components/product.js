import React,{useState, useEffect, useContext} from "react" 
import {BarangContext} from "../barangContext"

// import list barang
import {ListBarang} from "./product/listbarang"

export function ProductComponent(){

    // menggunakan hooks untuk memfilter kategori
    const [state, Filter] = useState({filter:"semua kategori"}) ;
    const {filter} = state;

    // mengambil nilai barang dari provider (menggunakan Context API)
    const {barang} = useContext(BarangContext);

    // mengubah state filter
    const _handleChange = (event) => {
        Filter({filter:event.target.value})
    }

    // similar componentDidUpdate(){}
    useEffect(()=>{
        alert(`Produk yang ditampilkan berdasarkan kategori ${filter}`)
    },[filter])

    return(
        <div className="container-fluid" style={{marginTop:"100px"}}>
            <form>
                <label><p style={{fontSize:"25px",textAlign:"justify"}}>Tampilkan berdasarkan : </p></label>
                <select  style={{fontSize:"25px",padding:"7px 15px"}} name="filter" value={filter} onChange={_handleChange}>
                    <option value="semua kategori">Semua Kategori</option>
                    <option value="area memasak">Area Memasak</option>
                    <option value="area mencuci">Area Mencuci</option>
                </select>
            </form>

            {/* menampilkan list barang sesuai filter kategori */}
            <ListBarang barang={barang} filter={filter}/>
        </div>
    )
}