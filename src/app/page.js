import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/header";

// npm run dev
// localhost:3000 접속

// 리액트 프레임워크 (틀기반 작업)
// page.js : 각 페이지
// layout.js : pagejs를 감싸는 파일
// non-found.js : Not Found 오류에 해당하는 페이지
// error.js : 기타 오류에 대한 페이지 
// loading.js : 로딩 페이지
// route.js : API 경로 생성 (JSON)

// blog 라는 경로 추가
// /localhost:3000/blog

export default function Home() {
  console.log('hello')
  return (
    <div>
    <Link href="/about">어바웃페이지로 이동</Link>
    <br/>
    <Link href="/blog">블로그 페이지로 이동</Link>
    </div>
  );
}


