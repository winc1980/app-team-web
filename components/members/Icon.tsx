import Image from "next/image";
import { CmsImageType } from "@/types/CmsImage";

export default function Icon({ image }: { image: CmsImageType }) {
  return (
    <div className="relative aspect-square overflow-hidden w-20 h-20">
        <Image src={image.url} alt="icon image" className="absolute inset-0 w-full h-full object-cover rounded-full" width={72} height={72} />
    </div>
  )
}