import Post from "./Post";

export default function Posts({ wrap }) {

    const style = wrap ? "flex flex-col gap-4 md:grid grid-cols-3 gap-12" : "flex flex-col gap-[5rem]";

    return (
        <div className={style}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}