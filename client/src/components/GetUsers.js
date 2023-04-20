import instance from "./axios";

const GetUsers = async () => {
  try {
    let leaders = [];
    const response = await instance.get("/api/v1/scores");
    response.data.scores.map((item) =>
      leaders.push({ user: item.user, points: 0 })
    );
    return leaders;
  } catch (error) {
    console.log(error);
  }
};

export default GetUsers;
