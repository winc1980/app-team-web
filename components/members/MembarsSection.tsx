import MemberCell from "./MemberCell";
import { client } from "@/libs/microcms";
import { MemberType } from "@/types/Member";

async function getMembers(): Promise<MemberType[]> {
  const data = await client.get({
    endpoint: 'members',
  });
  return data.contents;
}

export default async function MembersSection() {
    const members = await getMembers();

    return (
        <div className="my-3 px-4 flex flex-col gap-6">
            {members.map((member) => (
                <MemberCell key={member.id} line={true} member={member} />
            ))}
        </div>
    )
}