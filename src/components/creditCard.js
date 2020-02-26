import React, { Component } from 'react'

export default class creditCard extends Component {

state = {
    cardNumber:"" ,
    fullName:"" ,
    validThru:"",
  }; 

slash=(y)=>{
  var arr=[]
  for(let i=0;i<y.length;i+=2){
  arr.push(y.slice(i,i+2))
}
return arr.join('/')
}

space=(x)=>{ 
   var arr=[]
  for(let i=0;i<x.length;i+=4){
 
   arr.push(x.slice(i,i+4))
     
    }
 return arr.join(' ')
  }

onChangeNumber=(event)=> {

  const reg=/^[0-9]*$/

  if(reg.test(event.target.value)&&(event.target.value.length<17)){
  
  this.setState({cardNumber:event.target.value})};
 
}

onChangeName=(event)=> {
  var reg=/^[a-zA-Z ]*$/
  if(reg.test(event.target.value)&&(event.target.value.length<=20)){
  this.setState({fullName:event.target.value});
}
}
onChangeThrut=(event)=> {
  // if(event.target.value.length<5){
 
  const reg = /^[0-9]*$/
  if((reg.test(event.target.value) &&(event.target.value.length<5)&&(event.target.value.substring(0,2)<13))){

  this.setState({validThru:event.target.value})}



}

render() {
  return (
   < div className='card'>
  
<div className='credit-card'>
  <h3 className="bank">Campany Name</h3>
<div className="big-zone">
  
    <p className="text-zone1">
    {this.space(this.state.cardNumber.padStart(16,'*'))}
    </p>
    
    <p className="text-zone2">
    {this.state.fullName.padStart(8,'*').toUpperCase()}
    </p>
    <p className="text-zone3">
    {this.slash(this.state.validThru.padStart(4,'*'))}
    </p>

</div>
</div>
<div >
   <form className='formulaire'> 
    
   <input className="tap"
    type="text"
    placeholder="Card Number"
    value={this.state.cardNumber}
    onChange={this.onChangeNumber}
    
      /> 
      <input className="tap"
    type="text"
    placeholder="Full Name"
    value={this.state.fullName}
    onChange={this.onChangeName}
   
    /> 
    <input className="tap"
    type="text"
    placeholder="Valid Thru"
    value={this.state.validThru}
    onChange={this.onChangeThrut}
    
    /> 
  
  </form>
</div>

  </div>
  )
    

}
}
