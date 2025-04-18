
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const stats = [
    { label: "Started In", value: "2020", progress: 100 },
    { label: "Happy Customers", value: "50K+", progress: 85 },
    { label: "Countries", value: "30+", progress: 75 },
    { label: "Brands", value: "100+", progress: 90 },
  ];

  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
      alt: "Fashion Collection 1"
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
      alt: "Fashion Collection 2"
    },
    {
      url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200",
      alt: "Fashion Collection 3"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-trendify-charcoal">About Trendify</h1>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
              alt="Trendify Store" 
              className="w-full h-96 object-cover rounded-xl shadow-lg mb-8" 
            />
            
            <div className="bg-gradient-to-r from-trendify-sand to-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-trendify-charcoal">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2020, Trendify was born out of a passion for fashion and a desire to make quality clothing accessible to everyone. 
                What started as a small online boutique has grown into a global brand serving customers worldwide.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our mission is to provide you with clothes that not only look good but feel good too. We believe that fashion should be sustainable, 
                ethical, and inclusive, which is why we carefully source our materials and work with manufacturers who share our values.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-trendify-charcoal">{stat.label}</h3>
                  <p className="text-3xl font-bold text-trendify-teal mb-4">{stat.value}</p>
                  <Progress value={stat.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-trendify-charcoal">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-2 text-trendify-teal">Quality</h3>
                <p className="text-gray-700">We never compromise on quality. Each product is carefully crafted to ensure durability and comfort.</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-2 text-trendify-coral">Sustainability</h3>
                <p className="text-gray-700">We are committed to reducing our environmental footprint through sustainable practices.</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-2 text-amber-600">Inclusivity</h3>
                <p className="text-gray-700">We celebrate diversity and create products for people of all shapes, sizes, and backgrounds.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center text-trendify-charcoal">Our Collections</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {sliderImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="p-0">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            className="w-full h-[400px] object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
