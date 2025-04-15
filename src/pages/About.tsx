
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About Trendify</h1>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
              alt="Trendify Store" 
              className="w-full h-80 object-cover rounded-lg mb-8" 
            />
            
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, Trendify was born out of a passion for fashion and a desire to make quality clothing accessible to everyone. 
              What started as a small online boutique has grown into a global brand serving customers worldwide.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to provide you with clothes that not only look good but feel good too. We believe that fashion should be sustainable, 
              ethical, and inclusive, which is why we carefully source our materials and work with manufacturers who share our values.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Quality</h3>
                <p className="text-gray-700">We never compromise on quality. Each product is carefully crafted to ensure durability and comfort.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Sustainability</h3>
                <p className="text-gray-700">We are committed to reducing our environmental footprint through sustainable practices.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Inclusivity</h3>
                <p className="text-gray-700">We celebrate diversity and create products for people of all shapes, sizes, and backgrounds.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                  alt="CEO" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                  alt="Creative Director" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">Jane Smith</h3>
                  <p className="text-gray-600">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              We'd love to hear from you! If you have any questions, feedback, or inquiries, feel free to reach out to our customer service team.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-trendify-teal text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
