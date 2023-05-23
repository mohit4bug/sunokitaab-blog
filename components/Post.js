import Image from "next/image";
import postImg from "../public/post.jpg";
import Link from "next/link";

export default function Post() {

    const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque debitis tempora ipsa quaerat doloribus est delectus, itaque quod illum dicta perspiciatis repellat suscipit sit facere. Laborum minima maxime laboriosam quae assumenda suscipit aut cum architecto adipisci dignissimos consequatur labore, corporis iste ad nesciunt voluptate perferendis ab odit explicabo sequi soluta quis repudiandae qui. Praesentium ullam id culpa beatae ducimus aperiam totam dignissimos, illo magni voluptate, dolores voluptatem pariatur aliquid quaerat corporis explicabo sed deleniti esse sint aut aliquam eum. Dicta fuga nesciunt, tenetur deserunt, sequi quos saepe dolor provident reiciendis minus quam in eius, harum minima aspernatur optio dolorum. Incidunt."
    const CONTENT_VISIBLE = content.split(" ").splice(0, 30).join(" ")
    const boldValue = 1

    return (
        <div className="flex flex-col gap-4 text-center">
            <p className="text-neutral-500 italic">14/05/2023</p>
            {/* This is image container */}
            <div className="h-[25rem] relative">
                <Image src={postImg} fill className="h-full w-full object-cover" alt="post" />
            </div>
            <h2 className="text-start font-bold text-2xl">Welcome to our first blog.</h2>
            <p className="w-full text-start break-all hyphens-auto">
                {CONTENT_VISIBLE}{' '}
                <Link href="/10" className="underline italic cursor-pointer">Read more.</Link>
            </p>
        </div>
    )
}