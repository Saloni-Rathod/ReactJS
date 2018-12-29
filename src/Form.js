import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

//import App from './App';
class Form extends  Component {
    constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {},
           msg:{}
       }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let msg ={};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              msg["name"] = fields["name"]
              errors["name"] = "Only letters";

           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  
 //password

 if(!fields["password"]){
    formIsValid = false;
   
    errors["password"] = "Cannot be empty";
 }

 //address

 if(!fields["address"]){
    formIsValid = false;
    errors["address"] = "Cannot be empty";
 }


      this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();
        let fields = this.state.fields;
       // let errors = {};
        //let msg ={};
        //let formIsValid = true;
        if(this.handleValidation()){
           alert("Form submitted");
           console.log("name:" + fields["name"]);
           console.log("email:"+fields["email"]);
           console.log("Password:" +fields["password"]);
           console.log("address:"+ fields["address"]);
        
        }else{
           alert("Form has errors.")
        }
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    render(){
        return (
            <div>           
               <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="col-md-4 col-md-offset-4">
                      <fieldset>
                           
                                     <br/>
                          <div className="form-group">
         <label htmlFor="name">Name
         <input type="text" className="form-control" size="30" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
           name="name" />
           <span style={{color: "red"}}>{this.state.errors["name"]}</span>
           </label>
       </div> 
                         
                         <br/>

                         <div className="form-group">
         <label htmlFor="email">Email
         <input type="email" className="form-control" size="30" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
           name="email" />
           <span style={{color: "red"}}>{this.state.errors["email"]}</span></label>
       </div> 

                        
                         <br/>

                         <div className="form-group">
         <label htmlFor="password">Password
         <input type="password" className="form-control" size="30" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}
           name="password" />
            <span style={{color: "red"}}>{this.state.errors["password"]}</span> </label>
       </div> 


                                                 <br/>
                         <div className="form-group">
         <label htmlFor="address">Address
         <input type="text" className="form-control" size="30" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}
           name="address" />
           <span style={{color: "red"}}>{this.state.errors["address"]}</span> </label>
       </div> 
                         <button type="submit" className="btn btn-primary">
          Sign up
       </button>
                     </fieldset>
                  </div>

              </form>
            </div>
      )
    }
}
export default Form;
//ReactDOM.render(<App />, document.getElementById('root'));
//React.render(<Form />, document.getElementById('root'));