import Link from "next/link";

export default function Home() {
  return (
    <div>
      <img alt="" src="/image.jpg" width={100} height={100}></img>
      <img alt="" src="/image_big.png" width={100} height={100}></img>
      <Link href="/">home</Link>
    </div>
  );
}
