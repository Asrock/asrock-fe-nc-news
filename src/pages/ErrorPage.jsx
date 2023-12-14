const ErrorPage = ({ message }) => {
    return (
        <div className="center">
            <p>There was an error...</p>
            <p>{message}</p>
        </div>
    )
};

export default ErrorPage;