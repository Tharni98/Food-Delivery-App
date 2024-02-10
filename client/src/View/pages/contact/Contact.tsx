import {Component} from "react";
import axios from "axios";
// @ts-ignore
import {BackGraound} from '../../common/BackGround/BackGround';
import * as http from "http";

interface ContactProps {
    data: any;
}

interface ContactState {
    email: string;
    subject: string;
    message: string;
}


export class Contact extends Component <ContactProps,ContactState>{
    private api: any;


    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL:` http://localhost:4000`});
        this.state = {
            email: '',
            subject: '',
            message: ''
        }

        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }
    render() {
        return (
            <>
                {/*<h1 className={'text-center text-3xl text-[#005B41]'}>This is a Contact Component</h1>*/}
                <div className="flex ">
                    <div className="h-96 w-1/2 pt-5 pb-5 pl-10 mx-auto bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-3xl mb-5">

                        <div className="p-2 mb-5 ">
                            <h2 className="text-3xl mb-5 text-black font-bold-2xl text-center decoration-2">Contact Us</h2>
                            <p className="pb-3 text-[18px]">Got a technical Support</p>

                            <form className="h-auto p-2 justify-center">

                                <div className="pb-5">
                                    <label className="text-[10px] pr-2 font-bold">Your Email: </label>
                                    <input className="float-right w-96 border-[1px] border-green-200" type="email" name={"email"}
                                           value={this.state.email} onChange={this.handleMessageInputOnChange}/>
                                </div>

                                <div className="pb-5">
                                    <label className="text-[10px] pr-2 font-bold">Your Subject: </label>
                                    <input className="float-right w-96 border-[1px] border-green-200" type="text"
                                           name={"subject"} value={this.state.subject} onChange={this.handleMessageInputOnChange}/>
                                </div>

                                <div className="pb-5">
                                    <label className="text-[10px] pr-2 font-bold">Your Massage: </label>
                                    <textarea className="float-right w-96 border-[1px] border-green-200" name="message"
                                              value={this.state.message} onChange={this.handleMessageInputOnChange}/>
                                </div>

                                <div className=" mt-2">
                                    <button type="button"
                                            className={"m-5 p-[10px] bg-green-600 rounded-b-sm text-[12px] hover:text-white"} onClick={this.onSendButtonClick}>Submit
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </>
        );
    }
    handleMessageInputOnChange(event: {target: {value: any; name: any}}) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSendButtonClick = () => {
        try {
            this.api.post('/contact/submit', {
                email:this.state.email,
                subject:this.state.subject,
                message:this.state.message
            }).then((res: {data:any})=> {
                const jsonData = res.data;
                // @ts-ignore
                alert(jsonData);
            }).catch((error: any) =>{
                console.error('Axios Error', error);
            })
        }catch (error){
            console.error("Error Submitting Data", error);
        }
    }
}