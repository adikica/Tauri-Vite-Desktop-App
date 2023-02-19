import { useNavigate } from "react-router-dom";
export default function Admin() {
  const navigate = useNavigate();
  return (
    <div>
      <h2> Admin Page</h2>
      <button onClick={() => navigate("/")}>Go to Login</button>
      <button onClick={() => navigate("/abc")}>Go to abc</button>
    </div>
  );
}
