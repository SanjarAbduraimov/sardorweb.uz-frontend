import axios from "../utils/axios";

export async function getSortedPostsData() {
  try {
    const { data } = await axios.get("/portfolios?populate=file");
    const allPostsData = data?.data?.map((portfolio) => {
      const {
        id,
        attributes: { title, file, ...rest },
      } = portfolio;

      const string_parameterize = (str) =>
        str
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 -]/, "")
          .replace(/\s/g, "-");
      const path = string_parameterize(title);
      const image = portfolio?.attributes?.file?.data
        ? portfolio?.attributes?.file?.data[0]?.attributes?.url
        : "/images/05.jpg";

      return {
        id,
        path,
        title,
        ...rest,
        image,
      };
    });
    
    return allPostsData.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  } catch (error) {
    console.log(error.message, "===== error from posts =====");
    throw error;
  }
}
export async function getPostData(id) {
  const {
    data: { data },
  } = await axios.get(`/portfolios/${id}?populate=file`);
  const image = data?.attributes?.file?.data
    ? data?.attributes?.file?.data[0]?.attributes?.url
    : "/images/05.jpg";
  const { file, ...rest } = data?.attributes;
  return {
    id,
    ...rest,
    image,
  };
}
