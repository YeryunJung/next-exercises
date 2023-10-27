"use client";

import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  let a = usePathname(); // 현재 URL 출력
  let b = useSearchParams(); // Searh parameter 출력 (쿼리 스트링)
  let c = useParams(); // 유저가 다이나믹 라우터 입력한 것 출력

  return (
    <>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        메인으로 가기
      </button>
      <button
        onClick={() => {
          router.back();
        }}
      >
        뒤로 가기
      </button>
      <button
        onClick={() => {
          router.forward();
        }}
      >
        앞으로 가기
      </button>
      <button
        onClick={() => {
          router.refresh();
        }}
      >
        새로고침
      </button>
      <button
        onClick={() => {
          router.prefetch("/detail/dsds");
        }}
      >
        {/* 다음페이지를 더 빠르게 로드 */}
        {/* Link만 써도 자동동작 */}
        프리페치
      </button>
    </>
  );
}
