import "../styles/pages/signin.scss"
import Header from "../components/header";
import Footer from "../components/Footer";

 const Signin =()=> {
 
  return (
    <div>
      <Header/>
    <section className="form-top">
      
      <div className="sign-header">
        
        <h2>Sign in or create an account</h2>
      </div>
      <div className="contain">
        <p>* indicates required field</p>
        <form>
          <input
            type="text"
            placeholder="* Username or email address"
            name="name"
           
          />
          <input
            type="password"
            placeholder="* Password"
            name="password"
            
          />
        </form>
        <div className="checked">
          <input type="checkbox" />
          <p>
            Keep me signed in.
            <span
              style={{
                color: "#005638",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Details
            </span>
          </p>
        </div>
        <div className="option">
          <p>Forgot your username?</p>
          <p>Forgot your password?</p>
        </div>

        <div className="button1">
          <button >Sign in</button>
        </div>
      </div>

     
    </section>
    <Footer/>
    </div>
  );
}
export default Signin;