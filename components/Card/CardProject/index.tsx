import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { SiNotion } from "@react-icons/all-files/si/SiNotion";

const CardProject = ({ data }: any) => {
  const title = data?.properties.Name.title[0].plain_text;
  const github = data?.properties?.Github.rich_text[0].href;
  const notion = data?.properties?.Notion.rich_text[0].href;
  const description = data?.properties.Description.rich_text[0].plain_text;
  const imgSrc = data?.cover.file?.url || data.cover.external.url;
  const tags = data?.properties.Tags.multi_select;
  const start = data?.properties?.Workperiod?.date?.start;
  const end = data?.properties?.Workperiod?.date?.end;
  const URL = data?.properties?.URL.rich_text[0]?.href;

  const calculatedPeriod = (start: any, end: any) => {
    const startDateStringArray = start?.split("-");
    const endDateStringArray = end?.split("-");

    if (startDateStringArray && endDateStringArray) {
      const startDate: Date = new Date(
        startDateStringArray[0],
        startDateStringArray[1],
        startDateStringArray[2],
      );
      const endDate: Date = new Date(
        endDateStringArray[0],
        endDateStringArray[1],
        endDateStringArray[2],
      );

      const diffInMs = Math.abs(+endDate - +startDate);
      const result = diffInMs / (1000 * 60 * 60 * 24);

      return result;
    }
  };

  if (data) {
    return (
      <div className="project-card cursor-pointer ">
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="cover image"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />

        <div className="p-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="mt-1 text-lg">{description}</h3>
          <article className="mt-5 mb-3">
            <h4 className="flex items-center text-xl font-bold gap-3">
              <svg
                className="w-6 h-6"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>
              관련링크들
            </h4>
            <ul className="flex flex-col items-start gap-1 my-2">
              <li className="flex items-center gap-2">
                <FaHeart className="w-6 h-6 fill-blue-500" />
                <Link href={URL}>
                  <a target="_black" className="py-2">
                    프로젝트 구경하기
                  </a>
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <FaGithub className="w-6 h-6 fill-blue-500" />
                <Link href={github}>
                  <a target="_black" className="py-2">
                    깃허브 바로가기
                  </a>
                </Link>
              </li>

              {notion && (
                <li className="flex items-center gap-2">
                  <SiNotion className="w-6 h-6 fill-blue-500" />
                  <Link href={notion}>
                    <a target="_black" className="py-2">
                      노션 보러가기
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </article>

          <p className="my-1 py-2">
            작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
          </p>
          <div className="flex flex-wrap items-start gap-2 mt-2">
            {tags?.map((tag: any, index: number) => {
              if (index < 5) {
                return (
                  <h1
                    className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                    key={tag.id}
                  >
                    {tag.name}
                  </h1>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>스켈레톤 구현중</div>;
  }
};

export default CardProject;
