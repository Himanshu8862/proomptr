import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

    const splitTags = (e) => {
        let combinedTags = e.target.value;
        combinedTags = combinedTags.split(" ").join("")
        const separateTags = combinedTags.split(",")
        setPost({ ...post, tag: separateTags })
        console.log("separateTags", separateTags)
    }


    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>

            <p className="desc text-left max-w-md">
                {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex-col gap-7 glassmorphism mb-10">
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your AI prompt
                    </span>
                    <textarea
                        value={post.prompt}
                        onChange={(e) => { setPost({ ...post, prompt: e.target.value }) }}
                        placeholder="Write your prompt here"
                        className="form_textarea"
                        required
                    />
                </label>
                <br />
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag {" "}
                        <span className="font-normal">(Enter comma seperated tags: product,webdevelopment,idea, etc.)</span>
                    </span>
                    <input
                        value={post.tag.join(",")}
                        onChange={splitTags}
                        placeholder="#tag"
                        className="form_input"
                        required
                    />
                </label>
                <br />
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm font-medium hover:text-gray-700 transition-all duration-200">Cancel</Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white shadow-md transition-all duration-200 hover:shadow-lg active:outline-none active:ring-2 active:ring-primary-orange active:ring-opacity-50"
                    >
                        {submitting ? (type === 'Create' ? 'Creating...' : `${type}ing...`) : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form