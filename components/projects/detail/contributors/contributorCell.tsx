import Icon from "./Icon";
import { MemberType } from "@/types/Member";
type ContributorCellProps = {
  member: MemberType;
}

export default function ContributorCell({ member }: ContributorCellProps) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <a href="" className="flex items-center gap-4">
        <Icon image={member.icon.url} />
        <div className="flex flex-col items-start gap-1">
          <h3 className="font-semibold text-sm">
            {member.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs">{member.role}</span>
          </div>
        </div>
      </a>
    </div>
  )
}