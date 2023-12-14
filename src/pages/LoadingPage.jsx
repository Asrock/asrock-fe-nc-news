const LoadingPage = ({ message }) => {
  return (
    <div className="center">
      <p>Loading...</p>
      <p>{message}</p>
    </div>
  )
};

export default LoadingPage;