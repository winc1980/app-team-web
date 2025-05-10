


export const ProjectCard = ({ title, description, image, link }: { title: string, description: string, image: string, link: string }) => {
    return (
        <div className="max-w-xs mt-4 w-full lg:max-w-sm rounded-2xl border border-gray-600 bg-transparent shadow-lg overflow-hidden">
            <a href={link} className="inline-block text-blue-300 font-medium">
                <img src={image} alt={title} className="w-full h-40 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl no-underline font-semibold mb-2 text-white">{title}</h2>
                    <p className="text-sm no-underline text-white">{description}</p>
                    <span className="mt-4 inline-block text-blue-300 hover:underline font-semibold text-sm">
                        詳しく見る →
                    </span>
                </div>
            </a>
        </div>

      );
};