
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { 
      label: "Started In", 
      value: "2020", 
      icon: <Sparkles className="h-6 w-6 text-amber-500" />
    },
    { 
      label: "Happy Customers", 
      value: "50K+", 
      icon: <Users className="h-6 w-6 text-pink-500" /> 
    },
    { 
      label: "Countries", 
      value: "30+", 
      icon: <Globe className="h-6 w-6 text-blue-500" /> 
    },
    { 
      label: "Brands", 
      value: "100+", 
      icon: <ShoppingBag className="h-6 w-6 text-green-500" /> 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-trendify-teal to-teal-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Trendify</h1>
                  <p className="text-teal-50 mb-6">
                    We're on a mission to bring you the best in fashion while making a positive impact on the planet.
                  </p>
                  <Button 
                    className="bg-white text-trendify-teal hover:bg-teal-50 w-fit"
                    onClick={() => window.location.href = "/shop"}
                  >
                    Shop Now
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
                    alt="Trendify Store" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-trendify-charcoal">Our Progress</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 h-1"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-50 rounded-full p-3 mr-4">
                        {stat.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{stat.label}</h3>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-trendify-teal">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-trendify-coral to-rose-500 rounded-xl shadow-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Fashion Journey</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Discover the latest trends, exclusive collections, and special offers by shopping with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-trendify-coral hover:bg-white/90"
                onClick={() => window.location.href = "/shop"}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

