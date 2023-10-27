import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  // 안녕이라는 제목을 가진 데이터 하나 가져오기
  //   let result = await db.collection("post").findOne({ title: "안녕" });
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(props.params.id);

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>글제목</h4>
      <p>내용</p>
    </div>
  );
}
