import axios from "../utils/axios";

export async function getSortedPostsData() {
  try {
    const { data } = await axios.get("/portfolios?populate=file");
    const allPostsData = data?.data.map((portfolio) => {
      const {
        id,
        attributes: {
          title,
          file: {
            data: [
              {
                attributes: { url },
              },
            ],
          },
        },
      } = portfolio;
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
        ...portfolio.attributes,
        image: url ?? "/images/05.jpg",
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
