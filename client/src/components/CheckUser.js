import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const CheckUser = () => {
  const { isAuthenticated } = useAuth0();

  const handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:5000/hiya");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isAuthenticated && (
      <button className="submit" onClick={() => handleClick()}>
        CHECK USER
      </button>
    )
  );
};

export default CheckUser;
