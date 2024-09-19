import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar height="3px" color="#d87d4a" shallowRouting  />
    </>
  );
};

export default ProgressBarProvider;
