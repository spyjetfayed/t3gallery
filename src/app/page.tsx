import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/efd9c993-56fd-47e4-8248-8a1227b19c4c-fvv4uv.jpg",
  "https://utfs.io/f/7321d029-31c7-41ea-b47a-4c194f8d73ec-1tmy1s.jpg",
  "https://utfs.io/f/38544a87-8b5d-4fc4-854e-8c26599072f6-1tmy1q.jpg",
  "https://utfs.io/f/93783bd5-008b-40d4-9e4c-0d9d2d8ac58d-1tmy1r.jpg",
  "https://utfs.io/f/b530cf84-d928-4549-8fc2-b1d887f74c03-1tmy1p.jpg"
];

const mockImages  = mockUrls.map((url,index) => ({
  id: index + 1, 
  url,
}));

export default function HomePage() {
  return (
    <main className="">
    <div className="flex flex-wrap gap-4">
      { [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      )) }
    </div>
    </main>
  );
}
