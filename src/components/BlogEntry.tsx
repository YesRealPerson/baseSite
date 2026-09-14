import { InlineMath } from "react-katex";
import type { BlogEntryType } from "./Interfaces";
const BlogEntry = ({ date, title, subtitle, children, style }: BlogEntryType) => {
    let subtitleComponent;
    console.log(style)
    switch (style) {
        case 0:
            subtitleComponent = (<div className="mb-2"></div>)
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
                                <br />
                                <h1 className="text-gray-700 text-2xl inline md:hidden">{date}</h1>
                            </div>
                            {subtitleComponent}
                        </div>
                        <div className="text-lg md:text-xl max-w-200">
                            {children}
                        </div>
                    </div>
                    <hr className="my-2 max-w-200" />
                </>
            );
        case 1:
            subtitleComponent = (<div className="mb-2"></div>)
            if (subtitle) {
                subtitleComponent = (<div className="mb-2 md:mt-0 mt-2 text-gray-200 text-lg md:text-2xl">{subtitle}</div>)
            }
            return (
                <>
                    <div className="bg-gray-900 p-10 rounded-md my-5">
                        <div className="border-left ml-4 border-l border-gray-100 pl-2 text-white" style={{ fontFamily: "Lexend Giga" }}>
                            <div className="text-3xl md:text-4xl mt-2">
                                <h1 className="inline">{title} </h1>
                                <InlineMath math="\vert"></InlineMath>
                                <h1 className="hidden md:inline"> {date}</h1>
                                <br />
                                <h1 className="text-gray-700 text-2xl inline md:hidden">{date}</h1>
                            </div>
                            {subtitleComponent}
                        </div>
                        <div className="text-lg md:text-xl max-w-200 text-gray-300 font-mono">
                            {children}
                        </div>
                    </div>
                </>
            );
    }
}
export default BlogEntry