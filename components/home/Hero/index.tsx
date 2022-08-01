import Link from "next/link";
import Animation from "../Animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          생각하고, 탐구하기를 좋아하는 김보라입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          TypeScript Lover | React
          <br className="hidden lg:inline-block " />
          프론트엔드 개발자를 희망하고 있습니다. 배운 모든 것을 기록하고
          공유하는 것을 좋아합니다.
          <br className="hidden lg:inline-block " />
          공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.
          <br className="hidden lg:inline-block " /># 코드치는 개발자가 아닌
          생각하는 개발자가 되자. 🚀
        </p>

        <div className="flex justify-center">
          <Link href="/projects">
            <a
              className="text-white hover:text-white dark:text-white dark:hover:text-white inline-flex bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              href="/projects"
            >
              프로젝트 보러가기
            </a>
          </Link>

          <a
            className="ml-4  text-white hover:text-white dark:text-white dark:hover:text-white inline-flex bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            href="https://github.com/rara-record/"
            target="_blank"
          >
            깃허브 보러가기
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
