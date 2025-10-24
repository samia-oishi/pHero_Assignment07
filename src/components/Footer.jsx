import React from "react";
import { Twitter, Linkedin, Facebook, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-11 py-12 border-b border-gray-700 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 ">
            CS — Ticket System
          </h2>
          <p className="text-sm ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat deleniti corrupti ad illo blanditiis deserunt perferendis aliquam. Beatae sed sint aspernatur asperiores laudantium tempora saepe optio velit corporis, numquam accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          </p>
        </div>

        <div className="pl-15">
          <h3 className="text-white font-semibold mb-4 text-base">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Saled</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-base">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
            <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-base">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Join Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-base">Social Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition">
              <Twitter size={16} /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Linkedin size={16} /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Facebook size={16} /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Mail size={16} /> support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-center text-sm text-gray-400">
        © 2025 CS — Ticket System by Samia Alam Oishi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
