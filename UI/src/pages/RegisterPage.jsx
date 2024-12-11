import { SignUp } from "@clerk/clerk-react";
const Register = () => {
    return (
        <div className="flex items-center justify-center mt-3">
            <SignUp signInUrl="/login"/>
        </div>
    )
};

export default Register;
