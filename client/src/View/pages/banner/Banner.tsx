import {Component} from "react";
import ricePlate from "../../../images/RicePlate.webp";

export class Banner extends Component {
    render() {
        return (
            <>
                <div className='ricePlate flex justify-center items-center gap-44 bg-yellow-200 from-fuchsia-200'>
                    <div className={'pl-32'}>
                        <h4 className='text-2xl font-bold'>JUST COME TO</h4>
                        {/*<h1 className='text-8xl font-bold'>to</h1>*/}
                        <h1 className='text-8xl font-bold'>fooides & orderd</h1>
                        {/*<h1 className='text-8xl font-bold'>for you</h1>*/}
                        <h6 className={''}> Here You will Fine All Best Quality And Pure Food. Order Now To Satisfy Your Hunger Pangs </h6>
                        <button className='bg-red-600 rounded-full p-2 text-2xl mt-20'>Latest Collection</button>
                    </div>
                    <div className={''}>
                        <img className='scale-95 ' src={ricePlate} alt='ricePlate'/>
                    </div>

                </div>

            </>
        );
    }
}