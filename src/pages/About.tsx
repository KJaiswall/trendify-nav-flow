
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Users, Globe, ShoppingBag, Sparkles, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { 
      label: "Started In", 
      value: "2020", 
      progress: 100, 
      icon: <Sparkles className="h-6 w-6 text-amber-500" />
    },
    { 
      label: "Happy Customers", 
      value: "50K+", 
      progress: 85, 
      icon: <Users className="h-6 w-6 text-pink-500" /> 
    },
    { 
      label: "Countries", 
      value: "30+", 
      progress: 75, 
      icon: <Globe className="h-6 w-6 text-blue-500" /> 
    },
    { 
      label: "Brands", 
      value: "100+", 
      progress: 90, 
      icon: <ShoppingBag className="h-6 w-6 text-green-500" /> 
    },
  ];

  const tabs = [
    { id: "story", label: "Our Story" },
    { id: "mission", label: "Mission & Vision" },
    { id: "values", label: "Our Values" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "story":
        return (
          <div className="space-y-6 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              Founded in 2020, Trendify was born out of a passion for fashion and a desire to make quality clothing accessible to everyone. 
              What started as a small online boutique has grown into a global brand serving customers worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey began with a simple vision: to create a shopping experience that combines quality, affordability, and sustainability. 
              Over the years, we've grown from a small team of passionate fashion enthusiasts to a global brand with presence in over 30 countries.
            </p>
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200" 
                alt="Our Story" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        );
      case "mission":
        return (
          <div className="space-y-6 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              <span className="text-xl font-semibold text-trendify-teal block mb-3">Our Mission</span>
              To provide high-quality, sustainable fashion that empowers individuals to express themselves confidently while making responsible choices for our planet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="text-xl font-semibold text-trendify-teal block mb-3">Our Vision</span>
              To become the world's most loved, innovative, and sustainable fashion brand, where everyone feels welcome and can find their perfect style.
            </p>
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200" 
                alt="Mission & Vision" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        );
      case "values":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-cyan-50 to-teal-100 h-2"></div>
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-trendify-teal" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-trendify-teal">Quality</h3>
                <p className="text-gray-700">We never compromise on quality. Each product is carefully crafted to ensure durability and comfort.</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-amber-50 to-orange-100 h-2"></div>
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-amber-600">Sustainability</h3>
                <p className="text-gray-700">We are committed to reducing our environmental footprint through sustainable practices and responsible sourcing.</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-rose-50 to-pink-100 h-2"></div>
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-rose-50 to-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-trendify-coral" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-trendify-coral">Inclusivity</h3>
                <p className="text-gray-700">We celebrate diversity and create products for people of all shapes, sizes, and backgrounds.</p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

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
                    onClick={() => setActiveTab("story")}
                  >
                    Our Story
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
                    <p className="text-3xl font-bold mb-4 text-trendify-teal">{stat.value}</p>
                    <Progress value={stat.progress} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interactive Tabs Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-16">
            <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 border-b">
              {tabs.map(tab => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  className={`rounded-full ${
                    activeTab === tab.id 
                      ? "bg-trendify-teal text-white hover:bg-trendify-teal/90" 
                      : "text-gray-600 hover:text-trendify-teal"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
            
            <div className="min-h-[300px]">
              {renderTabContent()}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-trendify-charcoal">Our Journey</h2>
            <div className="space-y-12">
              {[
                { year: "2020", title: "Trendify Founded", description: "Started as an online-only boutique fashion store." },
                { year: "2021", title: "Global Expansion", description: "Expanded to 10 countries and partnered with 20+ brands." },
                { year: "2022", title: "Sustainability Initiative", description: "Launched our eco-friendly product line and carbon offset program." },
                { year: "2023", title: "Brand Recognition", description: "Won 'Best Online Fashion Retailer' award." },
                { year: "2024", title: "Milestone Achievement", description: "Reached 50,000+ happy customers worldwide." }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="bg-trendify-teal rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < 4 && <div className="h-full w-0.5 bg-gray-200 my-2"></div>}
                  </div>
                  <div className="pt-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
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
