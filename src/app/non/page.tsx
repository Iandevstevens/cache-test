import Link from "next/link";

export default function Home() {
  return (
    <div>
      <img alt="" src="/image.jpg" width={500} height={500}></img>
      <img alt="" src="/image_big.png" width={500} height={500}></img>
      <Link href="/">home</Link>
    </div>
  );
}
