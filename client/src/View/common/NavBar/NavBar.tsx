import {Component} from "react";

import logo from '../../../images/Logo 2.png'
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <div className={"p-5 flex"}> {/* apply to Gradiant colur   */}

                <Link to="/">
                <div className="flex">
                    <h1 className={"mt text-2xl text-[#00000] pl-2 mt-2.5 "}>GOLDEN DINER</h1>
                    <img className={"h-14 w-14 m-1 pb-1 "} src={logo} alt={''}></img>
                </div>
                </Link>

                <ul className={"list-none ml-[350px] mt-2.5 mr-3 font-bold " }>
                    <li className={'inline-block mr-2  pr-3 text-[17px] text-[#00000] pt-[5px] hover:text-[#00000]'}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={'inline-block mr-2  pl-3 pr-3 text-[17px] text-[#00000] hover:text-[#00000]'}>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className={'inline-block mr-2  pl-1 pr-1 text-[17px] text-[#00000] hover:text-[#00000]'}>
                        <Link to={'/shopping-cart'}>My Cart</Link>
                    </li>
                    <li className={'inline-block mr-2  pl-3 pr-1 text-[17px] text-[#00000] hover:text-[#00000]'}>
                        <Link to={'/contact'}>Contact</Link>
                    </li>

                </ul>
                <button className={ 'border-2 font-bold text-fw-b ml-[420px] text-[15px] text-[#00000] bg-green-100 pl-3 pr-3 h-10 w-20 hover:text-green-600  rounded-full ' }>
                    <Link to={'/login'}>Sing in</Link>
                </button>

                {/*<button className={'border-2 font-bold text-fw-b ml-[500px] text-[15px] text-[#00000] bg-green-100 pl-3 pr-3 hover:text-green-600 '} >*/}
                {/*    </button>*/}
            </div>
        );
    }
    onClick = () => {
        alert("Btn Click")
    }
}

// #17594A