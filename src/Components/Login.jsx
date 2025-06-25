import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "./ui/checkbox";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add authentication logic here
        console.log("Logged in with:", { email, password, rememberMe });
        navigate("/profile"); // Redirect to profile page after login
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Checkbox
                                        id="remember-me"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setRememberMe(checked)}
                                    />
                                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                                        Remember Me
                                    </label>
                                </div>
                                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                Login
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="/signup" className="text-blue-600 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default Login;