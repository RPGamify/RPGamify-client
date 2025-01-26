import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "./components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const Auth = () => {
  return (
    <div className="flex justify-center align-center">
      <Tabs defaultValue="account" className="w-1/2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account" className="font-display">
            Sign In
          </TabsTrigger>
          <TabsTrigger value="password" className="font-display">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Sign In</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when youre done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name" className="font-display">
                  email
                </Label>
                <Input id="name" placeholder="e.g johndoe@example.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username" className="font-display">
                  Password
                </Label>
                <Input id="username" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="default"
                className="w-full bg-white text-text font-display dark:bg-secondaryBlack dark:text-darkText"
              >
                Sign In
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Sign Up</CardTitle>
              <CardDescription>
                <p>Enter your information to create an account</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex gap-5">
                <div className="space-y-1 grow">
                  <Label htmlFor="current" className="font-display">
                    First Name
                  </Label>
                  <Input id="current" type="text" placeholder="e.g John" />
                </div>
                <div className="space-y-1 grow">
                  <Label htmlFor="new" className="font-display">
                    Last Name
                  </Label>
                  <Input id="new" placeholder="e.g Doe" type={"text"} />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="font-display">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g johndoe@example.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="font-display">
                  Password
                </Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="font-display">
                  Confirm Password
                </Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="default"
                className="w-full bg-white text-text dark:bg-secondaryBlack font-display dark:text-darkText"
              >
                Create an account
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
