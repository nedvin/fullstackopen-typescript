interface ErrorProps {
  message: string;
}

const ErrorNotification = ({ message }: ErrorProps) => {
  if (!message) {
    return null;
  }

  return <div style={{ color: "red" }}>Error: {message}</div>;
};

export default ErrorNotification;
