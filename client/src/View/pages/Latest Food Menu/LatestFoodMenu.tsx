import {Component} from "react";
import {About} from "../about/About";

export class LatestFoodMenu extends Component {
    render() {
        return (
            <>
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    {/*<img src={image} alt=""/>*/}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</p>
                            <div className="mt-4">
                                <span className="text-sm text-gray-500">Posted on January 18, 2024</span>
                            </div>
                        </div>
                </div>
            </>
        );
    }
}