import SectionHeader from "@/components/shared/SectionHeader";
import Login from "./Login";
import FeatureSection from "@/components/shared/FeatureSection";

const LoginRegister = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto flex min-h-screen flex-col overflow-hidden">
      <SectionHeader label="My Account" url="/account" />
      <div className="mt-28">
        <Login />
        <div className="pb-8">
          <FeatureSection />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
