import { Compass } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center">
                            <Compass className="h-8 w-8 text-blue-400" />
                            <span className="ml-2 text-xl font-bold text-white">TravelExplorer</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-400">
                            Your gateway to extraordinary travel experiences around the world.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Our Team</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Follow Us</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <p className="text-center text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} TravelExplorer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;