import React,{Component} from 'react'; 

class Form extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            nama   : '', 
            alamat : '', 
            hobi   : '', 
            umur: null 
        } 
    } 

    onSubmitHandler = (event) => { 
        event.preventDefault(); 
        let umur = this.state.umur; 
        if (!Number(umur)) { 
            alert("silahkan isi usia anda terlebih dahulu"); 
        } 
    } 

    onChangeHandler = (event) => { 
        let nama   = event.target.nama; 
        let alamat = event.target.alamat; 
        let hobi   = event.target.hobi; 
        let val = event.target.value; 
        this.setState({ 
            [nama]  : val, 
            [alamat]:val, 
            [hobi]: '' 
        }); 
    } 
   
    render() { 
        return ( 
            <div className="wraperform"> 
                <form onSubmit={this.onSubmitHandler}> 
                    <h1>Halo {this.state.nama}</h1> 
                    <input type="text" onChange={this.onChangeHandler} name="nama" className="text" placeholder="masukan nama anda" required /> 
                    <h1>Sebutkan Salah satu Hobi Kamu {this.state.hobi}</h1> 
                    <input type="text" onChange={this.onChangeHandler} name="hobi" className="text" placeholder="masukan hobi kamu"  required/> 
                    <h1>Umur kamu adalah {this.state.umur}</h1>  
                    <input type="text" onChange={this.onChangeHandler} name="umur" className="text" placeholder="isi usia anda"  required/> 
                    <h1>Alamat tinggal {this.state.alamat}</h1> 
                    <textarea onChange={this.onChangeHandler} name="alamat" className="textarea" placeholder="masukan alamat lengkap"></textarea> 
                    <hr /> 
                    <input type="submit" onClick = {this.updateState}  value="simpan data" className="button"/> 
                </form> 
            </div> 
        ); 
    } 
} 

export default Form;