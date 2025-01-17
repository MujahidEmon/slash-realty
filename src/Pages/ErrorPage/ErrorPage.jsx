import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex bg-[#f4f6f9] gap-5 items-center justify-center min-h-screen flex-col">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl font-semibold">
        <span className="mr-2">{error.status}</span>
        {error.statusText || error.message}
      </p>
      <Link to={'/'} className="btn bg-green-500 text-white font-semibold">Go To Homepage</Link>
    </div>
  );
};

export default ErrorPage;
