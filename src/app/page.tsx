import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image alt="" src="/image.jpg" width={100} height={100}></Image>
      <Link href="/non">non</Link>
    </div>
  );
}
