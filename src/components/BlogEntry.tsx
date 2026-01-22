import type { BlogEntryType } from "./Interfaces";
const BlogEntry = ({ date, title, subtitle, children }: BlogEntryType) => {
    let subtitleComponent = (<div className="mb-2"></div>)
    if (subtitle) {
        subtitleComponent = (<div className="mb-2 text-gray-700 text-2xl">{subtitle}</div>)
    }
    return (
        <>
            <div>
                <div className="border-left ml-4 border-l border-gray-900 pl-2">
                    <div className="text-4xl mt-2">
                        <h1 className="inline">{title}</h1>
                        <span className="text-gray-400 text-3xl mx-3">|</span>
                        <h1 className="inline">{date}</h1>
                    </div>
                    {subtitleComponent}
                </div>
                <div className="text-xl max-w-200">
                    {children}
                </div>
            </div>
            <hr  className="my-2 max-w-200" />
        </>
    );
}
export default BlogEntry