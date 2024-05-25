import Link from 'next/link'
import './header.css'
import HeaderBackground from './header-background'
import logoImg from '@/assets/cat.jpg'
import Image from 'next/image'

// 헤더 컴포넌트
export default function Header()
{
    return(
        <>
        <HeaderBackground/>
        <header>
            <Link href="/">
                {/* <img src={logoImg.src} alt='img'/>  */}
                <Image src={logoImg}></Image>       {/* 이미지를 넣는 두가지 방법 */}
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/blog">블로그</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}