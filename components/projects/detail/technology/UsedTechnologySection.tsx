import Image from "next/image";

export default function UsedTechnologySection() {
    return (
        <div className="flex flex-col gap-2 items-start my-4">
            <h2 className="font-bold text-xs palt">使用技術</h2>
            <div className="flex gap-4 items-center">
                <a href="https://html.com/" target="_blank">
                    <Image src="/test-images/projects/tech/html.png" alt="Project Detail" width={50} height={50} />
                </a>

                <a href="https://www.w3schools.com/css/" target="_blank">
                    <Image src="/test-images/projects/tech/css.png" alt="Project Detail" width={50} height={50} />
                </a>

                <a href="https://www.javascript.com/" target="_blank">
                    <Image src="/test-images/projects/tech/js.png" alt="Project Detail" width={44} height={44} />
                </a>

                <a href="https://www.wordpress.org/" target="_blank">
                    <Image src="/test-images/projects/tech/wordpress.png" alt="Project Detail" width={44} height={44} />
                </a>
            </div>
        </div>
    )
}