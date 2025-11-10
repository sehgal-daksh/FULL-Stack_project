export default function Success() {
  const params = new URLSearchParams(location.search);
  const name = params.get("name") || "User";
  return (
    <div className="success-wrap">
      <div className="success-card">
        <h1>🎉 Successfully Logged In!</h1>
        <h2>Welcome, {name} 👋</h2>
        <a className="login-btn" href="/">Go to Home</a>
      </div>
    </div>
  );
}