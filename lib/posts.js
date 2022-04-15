import axios from "../utils/axios";

export async function getSortedPostsData() {
  try {
    const { data } = await axios.get("/blogs?populate=image");
    const allPostsData = data?.data.map((blog) => {
      const {
        id,
        attributes: { title, file, ...rest },
      } = blog;
      const string_parameterize = (str) =>
        str
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 -]/, "")
          .replace(/\s/g, "-");
      const path = string_parameterize(title);
      const image = blog?.attributes?.image?.data
        ? blog?.attributes?.image?.data[0]?.attributes?.url
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

export async function getAllPostIds() {
  const data = await getSortedPostsData();
  const paths = data?.map((item) => {
    return {
      params: { ...item, id: item.id.toString() },
    };
  });
  return paths;
}

export async function getPostData(id) {
  const {
    data: { data },
  } = await axios.get(`/blogs/${id}?populate=image`);
  return {
    id,
    ...data?.attributes,
  };
}
