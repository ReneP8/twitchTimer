import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <p className="text-4xl font-bold text-blue-700">Text</p>
      <h1 className="text-3xl font-bold text-red-500 uppercase">01:59:59</h1>
    </div>
  );
};

export default Home;
