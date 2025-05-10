import Image from "next/image";
import Icon from "./Icon";

type ContributorCellProps = {
    name: string;
    image: string;
    role: string;
}

export default function ContributorCell({ name, image, role }: ContributorCellProps) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
        <a href="" className="flex items-center gap-4">
            <Icon image={image} />
            <div className="flex flex-col items-start gap-1">
                <h3 className="font-semibold text-sm">
                    {name}
                </h3>

                <div className="flex items-center gap-2">
                    <span className="text-xs">{role}</span>
                </div>
            </div>
        </a>
    </div>
  )
}