import Image from 'next/image'

const BackgroundLogo = () => {
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full gap-5 z-[-1]">
        <div className="flex justify-center items-center">
          <Image
            className="max-w-[400px] h-auto opacity-[0.05]"
            src="/H3 Logo Final.svg"
            alt="logo"
            width={400}
            height={400}
            priority={true}
          />
        </div>
      </div>
    );
  };
  
  export default BackgroundLogo; 