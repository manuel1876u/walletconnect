 
 
  import { AlertCircle} from "lucide-react"; 
  
  const Notfoundpage = () => { 
  
    return (
      <div className="error-container"> 
        {/* Error Content */}
        <div className="error-content">
          <div className="error-icon">
            <AlertCircle className="icon" />
          </div>
          <h1 className="error-title">Not Found</h1>
          <p className="error-message">
            This page is not available.
          </p>
        </div>
      </div>
    );
  };
  
  export default Notfoundpage;
  