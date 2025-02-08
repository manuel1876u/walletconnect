import { useNavigate } from "react-router-dom";
import { AlertCircle, ArrowLeft } from "lucide-react"; 

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container"> 
      {/* Error Content */}
      <div className="error-content">
        <div className="error-icon">
          <AlertCircle className="icon" />
        </div>
        <h1 className="error-title">Error</h1>
        <p className="error-message">
           Oops! An error occurred, please import an active wallet.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
