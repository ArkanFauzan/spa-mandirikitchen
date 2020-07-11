import React from "react"
import {FormAbout} from "./about/form"

export class AboutComponent extends React.Component{
    constructor(){
        super()
        this.state={
            nama:"",
            email:"",
            pesan:"",
        }
    }

    _handleChange = (value) => {
        this.setState({[value.name]:value.value})
    }

    render(){

        const {nama, email, pesan} = this.state

        return(
            <div className="container">
                <img style={{display:"block", margin:"auto"}} width="100%"  src="img/cv-crop.jpg" />
                <h2 className="my-4">CV Mandiri Kitchen Perkasa</h2>
                <p className="mb-4" style={{fontSize:"20px",textAlign:"justify"}}>
                    Mandiri Kitchen Perkasa adalah sebuah perusahaan yang bergerak dibidang 
                    disain dapur restoran serta pembuatan peralatan dapur komersial. Disain 
                    atau perencanaan dapur restoran sangat diperlukan agar ruang dapur 
                    restoran anda menjadi efisien dan fungsional serta biaya yang dikeluarkan 
                    sesuai dengan hasil yg diinginkan karena Penataan Peralatan Memasak yang 
                    TEPAT dan BENAR.  Ruang lingkup dan spesifikasi pekerjaan kami 
                    meliputi Desain dan perencanaan dapur komersial, Pembuatan dan pengadaan 
                    alat alat dapur komersial, instalasi ducting dan instalasi gas restoran. 
                    Yang dimaksud Dapur Komersial disini adalah dapur yang dipakai untuk 
                    keperluan usaha, seperti Dapur Restoran, Dapur Hotel, Dapur Asrama maupun 
                    Dapur Catering</p>

                <h2>Kontak kami</h2>
                <table className="my-4">
                    
                    <tr>
                        <td>Gunadi</td>
                        <td>&nbsp;&nbsp;&nbsp;: 0821 xxxx xxxx</td>
                    </tr>
                    <tr>
                        <td>Heri</td>
                        <td>&nbsp;&nbsp;&nbsp;: 0812 xxxx xxxx</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>&nbsp;&nbsp;&nbsp;: mandirikitchenperkasa.com</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>&nbsp;&nbsp;&nbsp;: mandirikitchenperkasa@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>&nbsp;&nbsp;&nbsp;: Depok, Jawa Barat</td>
                    </tr>
                </table>

                <h2>Atau melalui form berikut:</h2>

                {/* menampilkan controlled form dengan prinsip lifting state up */}
                <FormAbout state={this.state} onChangeValue={this._handleChange}/>
            </div>
        )
    }
}