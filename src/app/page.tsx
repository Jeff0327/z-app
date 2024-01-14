import Image from "next/image";
import Link from 'next/link';
import mainImage from '../../public/Z.png';
export default function Home() {
  return (
    <>
      <div className="flex float-left w-1/2 h-full flex-row justify-center items-center">
        <Image src={mainImage} alt="mainImage" />
      </div>

      <div className="flex w-1/2 h-full flex-col justify-center items-center">
        <div className="items-left">
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        </div>
        <Link href="/i/flow/signup" className="my-5 border-2 rounded-lg px-20 bg-blue-400">계정 만들기</Link>
        <h3>이미 계정이 있으신가요?</h3>
        <Link href="/login" className="my-5 border-2 rounded-lg px-20 bg-blue-400">로그인하기</Link>
      </div>
    </>
  )
}
