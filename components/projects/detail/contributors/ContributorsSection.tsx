import ContributorCell from "./contributorCell";

export default function ContributorsSection() {
    return (
        <div className="flex flex-col gap-2 items-start my-4">
            <h2 className="font-bold text-xs palt">貢献者</h2>
            <div className="w-full flex gap-6 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <ContributorCell name="山田太郎" image="/test-images/members/icon.jpeg" role="山田太郎" />
                <ContributorCell name="山田太郎" image="/test-images/members/icon.jpeg" role="山田太郎" />
                <ContributorCell name="山田太郎" image="/test-images/members/icon.jpeg" role="山田太郎" />
            </div>
        </div>
    )
}