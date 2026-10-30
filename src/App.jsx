import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [role, setRole] = useState("Doctor");
  const [age, setAge] = useState("");
  const [nodes, setNodes] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }
    setScreen("assessment");
  };

  const handlePrediction = () => {
    if (!age || !nodes) {
      alert("Please enter age and number of nodes");
      return;
    }
    setResult(true);
  };

  return (
    <div className="app-container">

      {/* WELCOME SCREEN */}
      {screen === "welcome" && (
        <section className="welcome-screen">
          <div className="logo">+</div>

          <h1>FedHealth</h1>
          <p className="welcome-subtitle">
            Privacy-Preserving Healthcare AI
          </p>

          <div className="welcome-illustration">
            <div className="hospital">🏥</div>
            <div className="connection">↔</div>
            <div className="cloud">☁️</div>
            <div className="connection">↔</div>
            <div className="hospital">🏥</div>
          </div>

          <h2>Smarter Healthcare,<br />Together.</h2>

          <p className="welcome-description">
            Empowering hospitals to collaborate and
            improve AI models while keeping patient
            data private and secure.
          </p>

          <div className="welcome-features">
            <div>🔒 Data Privacy</div>
            <div>🤝 Collaboration</div>
            <div>🧠 Smart AI</div>
          </div>

          <button
            className="primary-btn"
            onClick={() => setScreen("login")}
          >
            Get Started →
          </button>

          <p className="footer-text">
            Powered by Federated Learning
          </p>
        </section>
      )}

      {/* LOGIN SCREEN */}
      {screen === "login" && (
        <section className="login-screen">
          <button
            className="back-btn"
            onClick={() => setScreen("welcome")}
          >
            ← Back
          </button>

          <div className="logo">+</div>
          <h1>Welcome Back</h1>
          <p className="section-description">
            Sign in to your FedHealth account
          </p>

          <div className="role-selection">
            <button
              className={role === "Doctor" ? "role active-role" : "role"}
              onClick={() => setRole("Doctor")}
            >
              👨‍⚕️ Doctor
            </button>

            <button
              className={
                role === "Administrator"
                  ? "role active-role"
                  : "role"
              }
              onClick={() => setRole("Administrator")}
            >
              ⚙️ Administrator
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <span>Forgot Password?</span>
            </div>

            <button className="primary-btn" type="submit">
              Sign In →
            </button>
          </form>
          <p className="signup-text">
            Don't have an account? <strong>Sign Up</strong>
          </p>
        </section>
      )}

      {/* PATIENT ASSESSMENT SCREEN */}
      {screen === "assessment" && (
        <section className="assessment-screen">
          <header className="dashboard-header">
            <div className="doctor-info">
              <div className="avatar">SK</div>
              <div>
                <h3>Dr. Sarah Karim</h3>
                <p>Hospital 1 · Active</p>
              </div>
            </div>

            <button
              className="logout-btn"
              onClick={() => setScreen("login")}
            >
              Logout
            </button>
          </header>

          <div className="assessment-heading">
            <p>Haberman · FedAvg Model</p>
            <h1>Patient Assessment</h1>
            <span>
              Enter patient information to run the model
            </span>
          </div>

          <div className="assessment-form">
            <label>Patient Age</label>
            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setResult(false);
              }}
              min="0"
            />

            <label>Number of Positive Axillary Nodes</label>
            <input
              type="number"
              placeholder="Enter number of nodes"
              value={nodes}
              onChange={(e) => {
                setNodes(e.target.value);
                setResult(false);
              }}
              min="0"
            />

            <div className="demo-notice">
              🔒 Patient data remains local and private.
            </div>

            <button
              className="primary-btn"
              onClick={handlePrediction}
            >
              Run Prediction Model ✦
            </button>
          </div>

          {result && (
            <div className="result-card">
              <h3>5-Year Survival Outcome</h3>
              <div className="result-content">
                <span className="positive">
                  ✓ Demo Result
                </span>
                <strong>88.5%</strong>
              </div>
              <p>
                Illustrative confidence only.
                This is not a medical prediction.
              </p>
            </div>
          )}

          <div className="research-notice">
            <span>ⓘ</span>
            <p>
              Research demonstration only.
              Not for clinical decision-making.
            </p>
          </div>

          <nav className="bottom-nav">
            <button className="nav-active">Assessment</button>
            <button onClick={() => setResult(false)}>
              Research
            </button>
            <button onClick={() => setScreen("login")}>
              Profile
            </button>
          </nav>
        </section>
      )}
    </div>
  );
}

export default App;