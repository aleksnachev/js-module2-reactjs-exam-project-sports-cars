import { useParams } from "react-router";
import useForm from "../../../hooks/useForm.js";
import useRequest from "../../../hooks/useRequest.js";
import {v4 as uuid} from 'uuid'

export default function CreateComment({ 
    user,
    onCreateStart,
    onCreateEnd 
}) {
    const {carId} = useParams()
    const {request} = useRequest()

        const submitHandler = async ({ comment }) => {
        const data = {
            _id: uuid(),
            message: comment,
            carId
        }
        onCreateStart(data)
        try {
            const createdComment = await request('/data/comments', 'POST', data)
            onCreateEnd(createdComment)
        } catch (err) {
            alert(err.message)
        }
    }
    const { register, formAction } = useForm(submitHandler, { comment: "" });
    
    return (
        <article className="mt-10 bg-black/50 border border-white/10 p-6 rounded-xl backdrop-blur shadow-lg">
            <h3 className="text-xl text-white font-semibold mb-3 tracking-wide">
                Add a Comment
            </h3>

            <form className="flex flex-col space-y-4" action={formAction}>
                <textarea
                    {...register('comment')}
                    placeholder="Write something..."
                    className="w-full h-28 p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition"
                    defaultValue={""}
                ></textarea>

                <input
                    type="submit"
                    disabled={!user}
                    defaultValue="Add Comment"
                    className={`cursor-pointer text-sm tracking-wide font-semibold px-5 py-2 rounded-lg border border-white/30 text-white transition 
            ${user
                            ? "hover:bg-white hover:text-black"
                            : "opacity-30 cursor-not-allowed"
                        }`}
                />
            </form>
        </article>
    );
}
