import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightsideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-2xl font-semibold" >Login With</h2>
                <button className="btn w-full mt-3">
                    <CiFacebook></CiFacebook>
                    Log in with Google
                </button>
                <button className="btn w-full mt-3">
                    <FaGithub></FaGithub>
                    Log in with GitHub
                </button>
            </div>
            <div className="p-4 mt-6">
                <h2 className="text-2xl font-semibold" >Finds Us On</h2>
                <div className="mt-4">
                    <a className="flex items-center border rounded-t-lg px-3 py-1" href=""><CiFacebook  className="mr-3"></CiFacebook>Facebook</a>
                    <a className="flex items-center border-x px-3 py-1" href=""><FaTwitter   className="mr-3"></FaTwitter>Twitter</a>
                    <a className="flex items-center border rounded-b-lg px-3 py-1" href=""><FaInstagram className="mr-3"></FaInstagram>Instragram</a>
                </div>
            </div>
            <div className="p-4 mt-6">
                <h2 className="text-2xl font-semibold" >Q Zone</h2>
                <div className="mt-10">
                    <img src={qzone1} alt="" />
                    <img className="my-8" src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default RightsideNav;