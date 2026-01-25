import type { BlogEntryType } from "./Interfaces";
const BlogEntry = ({ date, title, subtitle, children }: BlogEntryType) => {
    let subtitleComponent = (<div className="mb-2"></div>)
    if (subtitle) {
        subtitleComponent = (<div className="mb-2 md:mt-0 mt-2 text-gray-700 text-lg md:text-2xl">{subtitle}</div>)
    }
    return (
        <>
            <div>
                <div className="border-left ml-4 border-l border-gray-900 pl-2">
                    <div className="text-3xl md:text-4xl mt-2">
                        <h1 className="inline">{title}</h1>
                        <span className="hidden md:inline text-gray-400 text-3xl mx-3">|</span>
                        <h1 className="hidden md:inline">{date}</h1>
                        <br/>
                        <h1 className="text-gray-700 text-2xl inline md:hidden">{date}</h1>
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