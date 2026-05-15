function ProductImages({ images }) {

    return (
        <div className='grid gap-4'>

            {
                images?.map((image, index) => (

                    <img
                        key={index}
                        src={image}
                        alt='product'
                        className='rounded-2xl'
                    />

                ))
            }

        </div>
    )
}

export default ProductImages