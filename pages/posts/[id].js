import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

// 정적인 페이지에 들어온 값들만 뿌려줌
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

// 둘 모두 lib/posts에 저장한 함수를 가져와서 사용
// pages/posts/[id].js에 lib/posts에 만들었던 함수들을 적용
// getAllPosts
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// getPostData
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
