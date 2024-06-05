import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="container d-flex">
        <h1>Title</h1>
        <p>Text</p>
      </div>
        <Image
          src="https://picsum.photos/200/300"
          width={300}
          height={200}
          alt="test image"
        />
    </div>
  );
}
