// /api/test 로 GET/POST/PUT/DELETE/PATCH 요청하면 파일안 코드 실행해줌

export default function handler(요청, 응답) {
  console.log(123);
  return 응답.status(200).json("처리완료");
}
