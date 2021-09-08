import React from "react"

class Form extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            age:0,
            course:"",
            gender:"male",
            languages:{
                c:true,
                javascript:false,
                python:false
            },
            error:{
                name:"",
                age:""
            }
        }
    }
//destructing event object -refer below comments
    handleChange({target:{name,value,type,checked}})
    {   //event details such as type,value,name are available on event.target.object
        //console.log(  event.target)
        // console.log(event.target.type,event.target.name,event.target.value)
        console.log(name,value,type)
        const errors=this.state.error
        switch(name){
            case "name":{
                         if(value.length <6)
                            {
                             errors.name="name should greater than 6 words" 
                            }
                          else{
                               errors.name=""
                                }
                          break;
                          }
             case "age":{
                           if(value >45 || value<18)
                             {
                                errors.age="age should be between 18 and 45"
                             }
                              else{
                               errors.age=""
                              }
                              break;
                         }
             default:{}
        }
        this.setState({error:errors})
        if(type === "checkbox")
        {
            let a=this.state.languages
           // console.log(a)
            a[name]=checked
           // console.log(a)
            this.setState({a})
        }
        //using [name] in object to  replace the object key by value obtained from event name , refer notes for more clarification 
        else {
            this.setState({[name]:value},
            ()=>{console.log(this.state.gender)})
        }
        
    
    }
    

    handleSubmit(event)
    {   
        event.preventDefault();
        console.log(event)
        console.log(this.state)
    }

    render()
    {
        return(
            <>
            <h1>Form-controllable components</h1>
            <form>
                <div>
                    <label>Username  </label>
                    <input name="name" value={this.state.name}  type="text" onChange={(event)=>this.handleChange(event)}/>
                    <span>{this.state.error.name}</span>
                </div> <br/>
                <div>
                    <label>Age  </label>
                    <input name="age" value={this.state.age}  type="number" onChange={(event)=>this.handleChange(event)}/>
                    <span>{this.state.error.age}</span>
                </div> <br/>
                <div>
                    <label>Select Course  </label>
                    <select name="course" value={this.state.course} onChange={(event)=>this.handleChange(event)}>
                        <option value="react" >React</option>
                        <option value="angular" >Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div> <br/>
                <div>
                    <label>Gender  </label>
                    <input name="gender" value="male"  type="radio" onChange={(event)=>this.handleChange(event)} checked={(this.state.gender === "male")} />
                    <label>Male</label>
                    <input name="gender" value="female"  type="radio" onChange={(event)=>this.handleChange(event)}  checked={(this.state.gender === "female")}/>
                    <label>Female</label>
                </div> <br/>
                <div>
                    <label>Languages Known</label><br/>
                    <input name="c" type="checkbox" onChange={(event)=>this.handleChange(event)} checked={this.state.languages.c} value="c"/>
                    <label>c</label><br/>
                    <input name="javascript" type="checkbox" onChange={(event)=>this.handleChange(event)} checked={this.state.languages.javascript} value="javascript"/>
                    <label>javascript</label><br/>
                    <input name="python" type="checkbox" onChange={(event)=>this.handleChange(event)} checked={this.state.languages.python} value="python"/>
                    <label>python</label>
                </div>
                <div>
                    <button type="submit" onClick={(event)=>this.handleSubmit(event)}>submit</button>
                </div>
            </form>
            </>
        )
    }
}

export default Form