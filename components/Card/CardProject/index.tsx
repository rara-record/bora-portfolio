import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CardProject = ({ data }: any) => {
  const [loading, setLoading] = useState(true);
  const title = data?.properties.Name.title[0].plain_text;
  const github = data?.properties?.Github.rich_text[0].href;
  const notion = data?.properties?.Notion.url;
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
        <Link href={URL}>
          <a target="_black">
            <Image
              onLoad={() => setLoading(false)}
              className="rounded-t-xl"
              src={imgSrc}
              alt="cover image"
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="cover"
              quality={100}
            />

            {!loading && (
              <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="my-3 text-lg">{description}</h3>

                <a href={github} target="_black" className=" py-2">
                  깃허브 바로가기
                </a>
                <a href={notion} target="_black" className=" py-2">
                  노션 보러가기
                </a>

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
            )}
          </a>
        </Link>
      </div>
    );
  } else {
    return <div>스켈레톤 구현중</div>;
  }
};

export default CardProject;
