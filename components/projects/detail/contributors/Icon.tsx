import Image from "next/image";

export default function Icon({ image }: { image: string }) {
  return (
    <div className="relative aspect-square overflow-hidden w-20 h-20">
        <Image src={image} alt="プロジェクトのアイコン" className="absolute inset-0 w-full h-full object-cover rounded-full" width={64} height={64} />
    </div>
  )
}