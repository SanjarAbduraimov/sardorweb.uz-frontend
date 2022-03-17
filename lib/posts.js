import axios from "../utils/axios";

export async function getSortedPostsData() {
  try {
    const { data } = await axios.get("/blogs?populate=*");
    const images = await axios.get("/upload/files");
    const allPostsData = data?.data.map((blog) => {
      const {
        id,
        attributes: {
          title,
          image: {
            data: { id: imageId },
          },
        },
      } = blog;
      const image = images.data.find((image) => image?.id === imageId);
      const string_parameterize = (str) =>
        str
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 -]/, "")
          .replace(/\s/g, "-");
      const path = string_parameterize(title);
      return {
        id,
        path,
        ...blog.attributes,
        image: `${process.env.API_URL}${image?.url}`,
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
    meta,
  } = await axios.get(`/blogs/${id}?populate=*`);
  console.log(data, "===== attributes from getPostData =====");
  return {
    id,
    ...data?.attributes,
  };
}
