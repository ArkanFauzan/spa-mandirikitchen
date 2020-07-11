import React from "react"

export function FormAbout(props){

    const _handleChange = (event) => {
        props.onChangeValue(event.target)
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        const {nama, email, pesan} = props.state
        alert(`Nama: ${nama}, Email: ${email}, Pesan: ${pesan}`)
    }

    const {nama,email,pesan} = props.state;

    return(
        <form onSubmit={_handleSubmit} style={{display:"flex",flexDirection:"column",maxWidth:"600px"}}>
                    
                <label>Nama</label>
                <input type="text" name="nama" value={nama} onChange={_handleChange} />
                    
                <label>Email</label>
                <input type="text" name="email" value={email} onChange={_handleChange}  />
                    
                <label>Pesan</label>
                <textarea type="text" name="pesan" value={pesan} onChange={_handleChange}  />
            <button className="my-4 btn btn-primary" type="submit">Kirim</button>
        </form>
    )
}