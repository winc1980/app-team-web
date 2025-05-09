import Image from "next/image"
import UsedTechnologySection from "./technology/UsedTechnologySection"
import Overview from "./overview/Overview"
import ContributorsSection from "./contributors/ContributorsSection"
export default function ProjectDetailContainer() {
    return (
        <div className="flex flex-col w-full max-w-lg justify-center">
            {/* 画像 */}
            <img src="/test-images/projects/image.png" alt="Project Detail" className="w-full h-full" />

            {/* 概要 */}
            <Overview />

            {/* 使用技術 */}
            <UsedTechnologySection />

            {/* 貢献者 */}
            <ContributorsSection />
        </div>
    )
}