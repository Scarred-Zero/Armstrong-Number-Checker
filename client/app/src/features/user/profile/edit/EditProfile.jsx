import React from 'react'
import axios from 'axios';
import "./EditProfile.css"


const EditProfile = () => {
  const [formData, setFormData] = useState({ name: '', email: ''});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, isLoading] = useState(false);
  const errorRef = useRef(null);
  const navigate = useNavigate();
  const apiAuthUrlPrefix = import.meta.env.VITE_API_USER_URL_PREFIX;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    isLoading(true);
    try {
      const res = await axios.post(
        `${apiAuthUrlPrefix}/profile/edit`, formData
      )
        .then(() => {
          setMessage('Profile updated successfully!');
          navigate('/user/profile');
        })
        .catch((err) => {
          setError(err.response?.data?.message || 'Registration failed.')
        });
    } catch (error) {
      setError(error?.message);
    } finally {
      isLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 10000);
      return () => clearTimeout(timer)
    }
  }, [error]);

  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        window.scrollBy({
          top: -150, left: 0, behavior: 'smooth'
        });
      }, 400);
    }
  }, [error]);


  return (
    <section id="register-page" className='auth__section'>
      <div className="auth__header">
        <Link className="nav__logo" to="/">
          <img src={AppNameImg} alt="Armstrong Number Checker" className="appName__img" />
        </Link>
      </div>
      <div className="container">
        <div className="auth__container">
          <h1>Free Sign Up</h1>
          <p>Enter your Fullname, email address, and password to create an account</p>
          <br />
          {message && <div className="alert alert-success">{message}</div>}
          {error && (
            <div ref={errorRef} className="alert alert-danger">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="auth__form" method="POST">
            <div className="auth__form-container">
              <div className="form__group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" className="form__input" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder='John Doe' />
              </div>
              <div className="form__group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form__input" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='example@gmail.com' />
              </div>
              <div className="form__group">
                <label htmlFor="password">Password:</label>
                <div className="password__container">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form__input"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="eye-toggle-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>
              <div className="form__group">
                <label htmlFor="confirm_password">Confirm Password:</label>
                <div className="password__container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form__input"
                    id="confirm_password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="eye-toggle-btn"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    tabIndex={-1}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>
            </div>
            <button variant="contained" type="submit" className="submit_btn btn">
              {loading ? "Please wait..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default EditProfile
