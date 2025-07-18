import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image alt="" src="/images/image.jpg" width={500} height={500}></Image>
      <Image alt="" src="/images/image_big.png" width={500} height={500} quality={100}></Image>
      <Link href="/non">non</Link>
    </div>
  );
}
