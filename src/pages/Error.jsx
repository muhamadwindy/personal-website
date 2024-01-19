import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="font-3xl font-bold font-medium text-indigo-900">Error!</h1>
      <p>Sorry, an expected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
