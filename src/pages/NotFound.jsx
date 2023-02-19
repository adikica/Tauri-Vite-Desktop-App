import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h2>faqja qe kerkoni nuk egziston</h2>
      <Link to="/">Login Page</Link>
      <br />
      <Link to="/admin">Admin Page</Link>
    </div>
  );
}
