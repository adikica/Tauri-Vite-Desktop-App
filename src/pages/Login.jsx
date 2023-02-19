import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h2> Login Page</h2>
      <button onClick={() => navigate("/admin")}>Go to Admin</button>
      <button onClick={() => navigate("/about")}>Go to about</button>
    </div>
  );
}
