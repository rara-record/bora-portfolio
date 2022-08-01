import Layout from "../components/Layout/index";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config/index";
import { CardProject } from "components";

function Projects({ projects }: any) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
        <Head>
          <title>보라 포트폴리오 - 프로젝트</title>
          <meta name="description" content="BORA" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl m-10">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">
            {projects?.results?.length}
          </span>
        </h1>

        <div className="grid max-w-screen-xl grid-cols-1 gap-12 py-10 m-6 md:grid-cols-2 sm:w-full">
          {projects &&
            projects.results?.map((project: any) => (
              <CardProject key={project.id} data={project} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
export default Projects;

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
