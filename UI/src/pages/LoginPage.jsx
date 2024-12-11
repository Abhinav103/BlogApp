import { SignIn  } from "@clerk/clerk-react";
const Login = () => {
    return (
        <div className="flex items-center justify-center mt-3">
            <SignIn signUpUrl="/register"/>
        </div>
    )
};
export default Login;
