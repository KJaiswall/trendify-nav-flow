import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Mail, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type UserRole = "user" | "admin" | "vendor" | "superAdmin";

const Account = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [role, setRole] = useState<UserRole>("user");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate with a backend
    toast({
      title: "Sign in attempted",
      description: `Attempted login as ${role} with email: ${email}`,
    });
    // This would navigate on successful auth
    // navigate("/"); 
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would register with a backend
    toast({
      title: "Account created",
      description: `Created ${role} account for email: ${email}`,
    });
    // This would navigate on successful registration
    // navigate("/");
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Social Login",
      description: `Attempted to login with ${provider}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-gray-200">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-2xl font-bold text-center text-gray-800">
                {activeTab === "signin" ? "Sign In" : "Sign Up"}
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                {activeTab === "signin" 
                  ? "Sign in to your account to continue" 
                  : "Create a new account to get started"}
              </CardDescription>
            </CardHeader>

            {/* Role selection tabs with gradient backgrounds */}
            <div className="px-8 mb-6">
              <Tabs 
                defaultValue="user" 
                value={role}
                onValueChange={(value) => setRole(value as UserRole)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 bg-gray-100/80 p-1 rounded-lg">
                  <TabsTrigger 
                    value="user" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-400 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    User
                  </TabsTrigger>
                  <TabsTrigger 
                    value="admin" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-400 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    Admin
                  </TabsTrigger>
                  <TabsTrigger 
                    value="vendor" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-400 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    Vendor
                  </TabsTrigger>
                  <TabsTrigger 
                    value="superAdmin" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-400 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    Super
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Sign in/Sign up tabs */}
            <Tabs 
              defaultValue="signin" 
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as "signin" | "signup")}
            >
              <TabsList className="grid w-full grid-cols-2 bg-gray-100/80 mx-8 rounded-lg mb-6">
                <TabsTrigger 
                  value="signin" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-trendify-teal data-[state=active]:to-teal-400 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger 
                  value="signup" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-trendify-teal data-[state=active]:to-teal-400 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Sign In Form */}
              <TabsContent value="signin">
                <form onSubmit={handleSignIn}>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email" className="text-gray-700">Email</Label>
                      <Input 
                        id="signin-email"
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password" className="text-gray-700">Password</Label>
                      <Input 
                        id="signin-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>

                    {/* Role-specific fields with improved spacing */}
                    {role === "admin" && (
                      <div className="space-y-2">
                        <Label htmlFor="employee-id" className="text-gray-700">Employee ID</Label>
                        <Input 
                          id="employee-id"
                          placeholder="Employee ID"
                          value={employeeId}
                          onChange={(e) => setEmployeeId(e.target.value)}
                          required
                          className="h-11"
                        />
                      </div>
                    )}

                    {role === "superAdmin" && (
                      <div className="space-y-2">
                        <Label htmlFor="security-code" className="text-gray-700">Security Code</Label>
                        <Input 
                          id="security-code"
                          type="password"
                          placeholder="Security Code"
                          value={securityCode}
                          onChange={(e) => setSecurityCode(e.target.value)}
                          required
                          className="h-11"
                        />
                      </div>
                    )}

                    <Button type="submit" className="w-full h-11 bg-trendify-teal hover:bg-trendify-teal/90 text-white">
                      Sign In
                    </Button>
                  </CardContent>
                </form>

                <CardFooter className="flex flex-col space-y-6 pt-0 px-6 pb-6">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin("Google")}
                      className="h-11 border-gray-200 hover:bg-gray-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      Google
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin("Facebook")}
                      className="h-11 border-gray-200 hover:bg-gray-50"
                    >
                      <Facebook className="h-5 w-5 mr-2 text-[#1877F2]" />
                      Facebook
                    </Button>
                  </div>
                </CardFooter>
              </TabsContent>

              {/* Sign Up Form with improved spacing */}
              <TabsContent value="signup">
                <form onSubmit={handleSignUp}>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-gray-700">Email</Label>
                      <Input 
                        id="signup-email"
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-name" className="text-gray-700">Full Name</Label>
                      <Input 
                        id="signup-name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-gray-700">Password</Label>
                      <Input 
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-gray-700">Contact Number</Label>
                      <Input 
                        id="contact"
                        placeholder="+1 123 456 7890"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>

                    {/* Role-specific fields for sign-up */}
                    {role === "vendor" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="business-name" className="text-gray-700">Business Name</Label>
                          <Input 
                            id="business-name"
                            placeholder="Your Business Name"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business-type" className="text-gray-700">Business Type</Label>
                          <Input 
                            id="business-type"
                            placeholder="e.g. Clothing, Electronics"
                            value={businessType}
                            onChange={(e) => setBusinessType(e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                      </>
                    )}

                    {role === "admin" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="employee-id" className="text-gray-700">Employee ID</Label>
                          <Input 
                            id="employee-id"
                            placeholder="Employee ID"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department" className="text-gray-700">Department</Label>
                          <Input 
                            id="department"
                            placeholder="Your Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                      </>
                    )}

                    {role === "superAdmin" && (
                      <div className="space-y-2">
                        <Label htmlFor="security-code" className="text-gray-700">Security Code</Label>
                        <Input 
                          id="security-code"
                          type="password"
                          placeholder="Super Admin Security Code"
                          value={securityCode}
                          onChange={(e) => setSecurityCode(e.target.value)}
                          required
                          className="h-11"
                        />
                      </div>
                    )}

                    <Button type="submit" className="w-full h-11 bg-trendify-teal hover:bg-trendify-teal/90 text-white">
                      Create Account
                    </Button>
                  </CardContent>
                </form>

                <CardFooter className="flex flex-col space-y-6 pt-0 px-6 pb-6">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">
                        Or sign up with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin("Google")}
                      className="h-11 border-gray-200 hover:bg-gray-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      Google
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin("Facebook")}
                      className="h-11 border-gray-200 hover:bg-gray-50"
                    >
                      <Facebook className="h-5 w-5 mr-2 text-[#1877F2]" />
                      Facebook
                    </Button>
                  </div>
                </CardFooter>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
