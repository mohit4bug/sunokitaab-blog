import Image from "next/image";
import postImg from "../public/post.jpg";
import Posts from "@/components/Posts";

export default function Blog() {
    return (
        <div className="flex flex-col gap-[10rem]">
            <div className="flex flex-col gap-4">
                <p className="text-neutral-500 italic text-xl">14/05/2023</p>
                {/* This is image container */}
                <h1 className="text-start font-bold text-4xl">Welcome to our first blog.</h1>
                <div className="h-[25rem] relative">
                    <Image src={postImg} fill className="h-full w-full object-cover" alt="post" />
                </div>
                <p className="w-full text-[1.2rem] text-start break-all hyphens-auto first-letter:text-4xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis aperiam pariatur repellat cupiditate, velit ad perspiciatis amet dolores in tempore. Assumenda quam at aut, ut enim odio accusantium! Error inventore molestiae omnis accusamus tempore, velit provident recusandae illo, veritatis nostrum rem! Labore earum ducimus blanditiis doloremque nobis. Iste eius recusandae voluptates modi explicabo sequi eum vel dolor aliquid. At nam vero et, quisquam placeat dicta error, voluptatem assumenda tenetur amet atque maxime laborum corrupti facere ex? Temporibus, possimus architecto! Accusantium eveniet quibusdam, odio quae, labore accusamus animi deleniti officiis eius perferendis sed corrupti, praesentium quas! Repellendus vitae, libero sed ullam numquam eius soluta veniam accusantium eos animi expedita architecto ea, nihil tempore cupiditate ipsum! Cupiditate dolore fugiat aspernatur itaque eius incidunt molestias impedit iusto repudiandae rem minus dicta, accusantium nobis sit voluptatum culpa vero quidem vel ut assumenda reprehenderit! Quod, qui. Excepturi harum eos corporis ab maiores distinctio incidunt quis, dicta libero aliquam magni adipisci aliquid dignissimos quia fuga possimus esse fugit! Sint fugit, necessitatibus ut aut earum nihil! Expedita, inventore! In, quidem aspernatur nihil beatae fugit adipisci qui provident natus possimus placeat eius vitae blanditiis odit modi autem culpa voluptas eligendi. Corrupti iusto reiciendis accusamus ipsa maxime rerum. Dolore quas soluta sequi minima possimus, amet ipsam ducimus veniam? Velit modi magni, doloremque, fuga, cumque neque possimus est in voluptates quo odio sunt! Ab culpa nobis esse, ex voluptatem libero aliquam eveniet qui? Vel expedita nihil tempora iusto consequatur aperiam culpa voluptates, quas voluptate magni minima, maiores deleniti vitae impedit sed ad quaerat deserunt nostrum eius dolor repellendus. Nesciunt dolorem, nulla facilis tempore non doloremque voluptatem nemo veritatis, laboriosam error et reprehenderit iste perspiciatis, culpa minus unde? Harum odit inventore nulla iste officiis eius qui ad laboriosam delectus nobis a ducimus sapiente repellat architecto alias id error magni corporis aspernatur, neque accusantium modi veritatis. Explicabo iusto mollitia accusantium exercitationem eius fugit aspernatur a eaque autem. Quam blanditiis facilis magnam repudiandae fugiat architecto culpa, ullam dicta ratione assumenda nobis ea cupiditate perferendis officia quas porro unde asperiores obcaecati fugit fuga, possimus animi? Laboriosam debitis, aut ea maxime suscipit quaerat eius consectetur quidem veniam, velit dicta aliquid fuga impedit blanditiis modi fugit ullam quis accusantium repudiandae possimus delectus ipsa accusamus sit sed! Id vero, laborum laboriosam consequuntur maiores necessitatibus nisi laudantium aliquid, odit exercitationem nihil placeat molestias unde odio perferendis nemo ullam et neque eum, inventore dolores numquam? Praesentium asperiores veniam tempore! Similique, dolores ullam! Eum, magni sequi repellat assumenda iusto libero alias natus voluptatibus nisi excepturi eos magnam! Earum tempora dolorem inventore soluta? Veniam itaque dicta aut exercitationem, commodi, sequi quasi consequuntur in voluptatem beatae vitae tenetur inventore quam culpa maxime sint fugiat obcaecati! Commodi, dicta. Ipsam ducimus quas, dolorem, rerum officiis dignissimos itaque praesentium soluta, earum autem repudiandae eius nulla explicabo? Quasi nemo nobis eius incidunt neque nesciunt, dolore quaerat reprehenderit nihil, quam facilis sint quis! Doloribus enim tempora possimus velit provident rem blanditiis numquam aliquam. Atque inventore eaque iusto, dolorum deserunt, voluptatum aut incidunt in recusandae quidem sequi!
                </p>
            </div>
            <Posts wrap={true} />
        </div>
    )
}