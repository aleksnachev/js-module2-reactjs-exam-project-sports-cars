export default function DetailsComments({
    comments 
}) {
    return (
        <div className="mt-10 bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                Comments
            </h2>

            <ul className="space-y-4">
                {comments.map(comment => (
                    <li
                        key={comment._id}
                        className={`p-4 rounded-lg border ${comment.pending
                                ? "border-white/10 text-white/40 italic"
                                : "border-white/20 text-white"
                            }`}
                    >
                        <p className="text-sm font-light leading-relaxed">
                            <span className="text-gold-200 font-semibold">
                                {comment.author?.email}
                            </span>
                            : {comment.message}
                        </p>
                    </li>
                ))}
            </ul>

            {comments.length === 0 && (
                <p className="text-white/40 italic mt-4">No comments yet.</p>
            )}
        </div>
    );
}
