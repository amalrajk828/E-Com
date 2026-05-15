function ReviewCard({ review }) {

    return (
        <div className='bg-slate-900 p-5 rounded-2xl'>

            <h3 className='font-bold'>
                {review.user?.name}
            </h3>

            <p className='text-yellow-400'>
                ⭐ {review.rating}
            </p>

            <p className='text-slate-400 mt-2'>
                {review.comment}
            </p>

        </div>
    )
}

export default ReviewCard