import Icon from "./Icon";

export default function MemberCell({ line, name, image, introduction, githubUrl, snsUrl }: { line: boolean, name: string, image: string, introduction: string, githubUrl: string, snsUrl: string }) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex items-center gap-4">
            <Icon image={image} />
            <div className="flex flex-col items-start gap-1">
                <h3 className="font-semibold">
                    {name}
                </h3>

                {/* github and SNS URL */}
                <div className="flex items-center gap-2">
                    <a href={githubUrl} className="text-sm">
                        GitHub
                    </a>
                    <a href={snsUrl} className="text-sm">
                        SNS
                    </a>
                </div>
            </div>
        </div>
        <p className="text-sm pb-4">
            {introduction}
        </p>
        {line && <div className="w-full h-[1px] bg-gray-600" />}
    </div>
  )
}