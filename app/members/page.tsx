import MembersSection from "@/components/members/MembarsSection";
import PageHeader from "@/components/page-header";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader titleJa="メンバー一覧" titleEn="Our.team();" desc="WINCアプリチームのメンバーをご紹介します。" />
      <MembersSection />
    </main>
  );
}
