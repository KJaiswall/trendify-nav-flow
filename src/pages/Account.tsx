
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                {activeTab === "signin" ? "Sign In" : "Sign Up"}
              </CardTitle>
              <CardDescription className="text-center">
                {activeTab === "signin" 
                  ? "Sign in to your account to continue" 
                  : "Create a new account to get started"}
              </CardDescription>
            </CardHeader>

            {/* Role selection tabs */}
            <div className="px-4">
              <Tabs 
                defaultValue="user" 
                value={role}
                onValueChange={(value) => setRole(value as UserRole)}
                className="mb-4"
              >
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="user">User</TabsTrigger>
                  <TabsTrigger value="admin">Admin</TabsTrigger>
                  <TabsTrigger value="vendor">Vendor</TabsTrigger>
                  <TabsTrigger value="superAdmin">Super Admin</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Sign in/Sign up tabs */}
            <Tabs 
              defaultValue="signin" 
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as "signin" | "signup")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Sign In Form */}
              <TabsContent value="signin">
                <form onSubmit={handleSignIn}>
                  <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input 
                        id="signin-email"
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <Input 
                        id="signin-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    {/* Role-specific fields for sign-in */}
                    {role === "admin" && (
                      <div className="space-y-2">
                        <Label htmlFor="employee-id">Employee ID</Label>
                        <Input 
                          id="employee-id"
                          placeholder="Employee ID"
                          value={employeeId}
                          onChange={(e) => setEmployeeId(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    {role === "superAdmin" && (
                      <div className="space-y-2">
                        <Label htmlFor="security-code">Security Code</Label>
                        <Input 
                          id="security-code"
                          type="password"
                          placeholder="Security Code"
                          value={securityCode}
                          onChange={(e) => setSecurityCode(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    <Button type="submit" className="w-full">Sign In</Button>
                  </CardContent>
                </form>

                <CardFooter className="flex flex-col space-y-4 pt-0">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" onClick={() => handleSocialLogin("Google")}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" onClick={() => handleSocialLogin("Facebook")}>
                      <Facebook className="h-5 w-5 mr-2 text-blue-600" />
                      Facebook
                    </Button>
                  </div>
                </CardFooter>
              </TabsContent>

              {/* Sign Up Form */}
              <TabsContent value="signup">
                <form onSubmit={handleSignUp}>
                  <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input 
                        id="signup-email"
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input 
                        id="signup-name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input 
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Number</Label>
                      <Input 
                        id="contact"
                        placeholder="+1 123 456 7890"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                      />
                    </div>

                    {/* Role-specific fields for sign-up */}
                    {role === "vendor" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="business-name">Business Name</Label>
                          <Input 
                            id="business-name"
                            placeholder="Your Business Name"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business-type">Business Type</Label>
                          <Input 
                            id="business-type"
                            placeholder="e.g. Clothing, Electronics"
                            value={businessType}
                            onChange={(e) => setBusinessType(e.target.value)}
                            required
                          />
                        </div>
                      </>
                    )}

                    {role === "admin" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="employee-id">Employee ID</Label>
                          <Input 
                            id="employee-id"
                            placeholder="Employee ID"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Input 
                            id="department"
                            placeholder="Your Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                          />
                        </div>
                      </>
                    )}

                    {role === "superAdmin" && (
                      <div className="space-y-2">
                        <Label htmlFor="security-code">Security Code</Label>
                        <Input 
                          id="security-code"
                          type="password"
                          placeholder="Super Admin Security Code"
                          value={securityCode}
                          onChange={(e) => setSecurityCode(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    <Button type="submit" className="w-full">Create Account</Button>
                  </CardContent>
                </form>

                <CardFooter className="flex flex-col space-y-4 pt-0">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or sign up with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" onClick={() => handleSocialLogin("Google")}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" onClick={() => handleSocialLogin("Facebook")}>
                      <Facebook className="h-5 w-5 mr-2 text-blue-600" />
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
