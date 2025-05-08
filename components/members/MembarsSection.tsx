import MemberCell from "./MemberCell";


export default function MembersSection() {
    return (
        <div className="my-3 px-4 flex flex-col gap-6">
            <MemberCell line={true} name="小柴 奏人" image="/test-images/icon.jpeg" introduction="情報通信学科2年 3度の飯よりパソコンが好き Next.jsとReactを使ってサービスを作るのが好き" githubUrl="https://github.com/koshinokotaro" snsUrl="https://x.com/koshinokotaro" />
            <MemberCell line={false} name="小柴 奏人" image="/test-images/icon.jpeg" introduction="情報通信学科2年 3度の飯よりパソコンが好き Next.jsとReactを使ってサービスを作るのが好き" githubUrl="https://github.com/koshinokotaro" snsUrl="https://x.com/koshinokotaro" />
        </div>
    )
}