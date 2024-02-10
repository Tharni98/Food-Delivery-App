// @ts-ignore

import {Component} from "react";
import {Product} from '../../common/Product/Product';
import axios from "axios";
import ricePlate from "../../../images/RicePlate.webp";
import {privateDecrypt} from "crypto";


export class Home extends Component {
    private api: any;


    constructor(props: {}| Readonly <{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`})
        this.state={
            data:[],
        }
    }


    //React Lifecycle method
    componentDidMount() {
        this.fetchData();
            /*.then(r => console.log("Data fetch completed!" + r)); */// Callback Function
    }

    //asynchronize
    /*fetchData = async () =>{
        try {

            this.api.get('/product/all').then((res: {data: any}) => {
                const jsonData = res.data;
                console.log(jsonData)
                this.setState({data:jsonData});
            }).catch((error: any) => {
                console.error("Axios Error: ", error)
            });


        }catch (error) {
            console.log("Error fetching Data")
        }

    }*/

    fetchData= async ()=>{
        try {
            this.api.get('/products/all').then((res:{data:any}) =>{
                const jsonData=res.data;
                this.setState({data:jsonData});
            }).catch((error:any)=>{
                console.log("Axios Error");
            })

        }catch (error){
            console.log("Data Not Found")
        }
    }



    // @ts-ignore
    render() {

        // @ts-ignore
        const {data}=this.state;
        return (
            <>
                <div className='ricePlate flex justify-center items-center gap-44 bg-yellow-200 from-fuchsia-200'>
                    <div className={'pl-32'}>
                        <h4 className='text-2xl font-bold'>JUST COME TO</h4>
                        {/*<h1 className='text-8xl font-bold'>to</h1>*/}
                        <h1 className='text-8xl font-bold'>fooides & orderd</h1>
                        {/*<h1 className='text-8xl font-bold'>for you</h1>*/}
                        <h6 className={''}> Here You will Fine All Best Quality And Pure Food. Order Now To Satisfy Your Hunger Pangs </h6>
                        <button className='bg-red-600 rounded-full p-2 text-2xl mt-20' onClick={this.latestMenuList}>Latest Collection</button>
                    </div>
                    <div className={''}>
                        <img className='scale-95 ' src={ricePlate} alt='ricePlate'/>
                    </div>

                </div>

                <div className={'flex'}>
                    <div className={'flex flex-wrap justify-center items-center mx-auto mt-5 mb-5 shadow-md '}>

                        {
                           data.map((product:any)=>( //loop array
                               <Product key={product.id} data={product}/>
                           ) )
                        }
                    </div>
                </div>
            </>
        );


    }

    private latestMenuList = () => {
        this.setState({isActive:  !this.state}, ()=>{
        })
    }

}
