const ReviewCard = ({ r }) => {
  const { date, review, name, designation, image } = r;
  return (
    <div className="bg-base-100 px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex flex-col items-center">
        <img
          src="https://readymadeui.com/team-2.webp"
          alt="John Doe"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="mt-6 text-center">
          <p className="text-base text-green-500 font-bold uppercase">{name}</p>
          <h3 className="text-gray-400 text-base mt-3 leading-relaxed">
            {review}
          </h3>
          <div className="mt-6 rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
          <p className="text-gray-400 text-base mt-3">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
