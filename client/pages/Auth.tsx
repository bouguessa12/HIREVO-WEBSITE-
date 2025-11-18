import { useState } from "react";
import { Link } from "react-router-dom";

// Use design asset from the repository as background image
import BG_IMAGE from "../../DESIGN/job297-ploy-16c-blue-01.jpg";
const FALLBACK = "https://placehold.co/800x1000/357AFF/FFFFFF?text=Welcome";

function AuthForm({ type }: { type: "signin" | "signup" }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`${type} submitted`);
      }}
      className="flex flex-col gap-2 w-full items-center"
    >
      {type === "signup" && (
        <input
          placeholder="Full name"
          className="w-full max-w-xs p-2 text-sm rounded-full bg-white/5 text-white placeholder:text-white/60 border border-white/10"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        defaultValue={type === "signin" ? "jonas_kahnwald@gmail.com" : undefined}
        className="w-full max-w-xs p-2 text-sm rounded-full bg-white/5 text-white placeholder:text-white/60 border border-white/10"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-xs p-2 text-sm rounded-full bg-white/5 text-white placeholder:text-white/60 border border-white/10"
      />
      {/* Continue with Google button */}
      <button
        type="button"
        onClick={() => alert('Continue with Google (placeholder)')}
        className="mt-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm rounded-full bg-white text-[#051139] font-medium shadow-md"
      >
        {/* Google logo (hosted by Google) */}
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-4 h-4" />
        Continue with Google
      </button>
      <button
        type="submit"
        className={`mt-1 inline-flex items-center justify-center px-5 py-2 text-sm rounded-full font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5 ${
          type === "signup" ? "bg-purple-400" : "bg-sky-500"
        } text-white`}
      >
        {type === "signup" ? "Create account" : "Sign in"}
      </button>
    </form>
  );
}

export default function Auth({ initial = "signin" }: { initial?: "signin" | "signup" }) {
  const [showSecond, setShowSecond] = useState(initial === "signup");

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy p-6">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden bg-[#051139] shadow-xl border border-blue-500/50" style={{
        boxShadow: '0 0 30px rgba(51, 122, 255, 0.6), 0 0 60px rgba(51, 122, 255, 0.3), inset 0 0 30px rgba(51, 122, 255, 0.1)'
      }}>
        {/* Desktop slider */}
        <div className="hidden md:block relative h-[520px]">
          <div
            className="absolute inset-0 w-[200%] flex transition-transform duration-700"
            style={{ transform: showSecond ? "translateX(-50%)" : "translateX(0%)" }}
          >
            {/* First pane: signin form | image (welcome + sign up) */}
            <div className="w-1/2 flex">
              <div className="w-1/2 p-8 flex flex-col items-center justify-center border-r border-blue-500/30" style={{
                boxShadow: 'inset 0 0 20px rgba(51, 122, 255, 0.2)'
              }}>
                <div className="w-full max-w-xs">
                  <h2 className="text-white text-3xl font-bold mb-1">Sign in</h2>
                  <p className="text-white/80 text-sm mb-6">Please login to continue to your account.</p>
                  <AuthForm type="signin" />
                  <div className="mt-4 text-white/80 text-sm text-center">
                    Don't have an account? <button onClick={() => setShowSecond(true)} className="text-[#367AFF] font-semibold">Sign up</button>
                  </div>
                </div>
              </div>

              <div className="w-1/2 bg-cover bg-center relative">
                <img
                  src={BG_IMAGE}
                  alt="welcome"
                  onError={(e) => ((e.target as HTMLImageElement).src = FALLBACK)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/35 flex flex-col items-center justify-center text-center p-6">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/c37addd26b77fa4b10537e8af4a8dd3e1531c0ca?width=182" alt="HIREVO" className="w-20 h-20 mb-4" />
                  <h3 className="text-white text-3xl font-bold">Welcome</h3>
                  <p className="text-white/80 mt-2">Don't have an account?</p>
                  <button
                    onClick={() => setShowSecond(true)}
                    className="mt-4 px-6 py-2 bg-white/90 text-[#051139] rounded-full font-semibold shadow-md"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            {/* Second pane: image (welcome back + sign in) | signup form */}
            <div className="w-1/2 flex">
              <div className="w-1/2 bg-cover bg-center relative">
                <img
                  src={BG_IMAGE}
                  alt="welcome back"
                  onError={(e) => ((e.target as HTMLImageElement).src = FALLBACK)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/35 flex flex-col items-center justify-center text-center p-6">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/c37addd26b77fa4b10537e8af4a8dd3e1531c0ca?width=182" alt="HIREVO" className="w-20 h-20 mb-4" />
                  <h3 className="text-white text-3xl font-bold">Welcome back!</h3>
                  <p className="text-white/80 mt-2">Already have an account?</p>
                  <button
                    onClick={() => setShowSecond(false)}
                    className="mt-4 px-6 py-2 bg-white/90 text-[#051139] rounded-full font-semibold shadow-md"
                  >
                    Sign in
                  </button>
                </div>
              </div>

              <div className="w-1/2 p-8 flex flex-col items-center justify-center border-l border-blue-500/30" style={{
                boxShadow: 'inset 0 0 20px rgba(51, 122, 255, 0.2)'
              }}>
                <div className="w-full max-w-xs">
                  <h2 className="text-white text-3xl font-bold mb-1">Create account</h2>
                  <p className="text-white/80 text-sm mb-6">Create your account to get started with Hirevo.</p>
                  <AuthForm type="signup" />
                  <div className="mt-4 text-white/80 text-sm text-center">
                    Already have an account? <button onClick={() => setShowSecond(false)} className="text-[#367AFF] font-semibold">Sign in</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stacked view */}
        <div className="md:hidden p-6">
          <div className="mb-6 flex items-center gap-4">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/c37addd26b77fa4b10537e8af4a8dd3e1531c0ca?width=182" alt="HIREVO" className="w-12 h-12" />
            <div>
              <h2 className="text-white text-3xl font-bold">{showSecond ? "Create account" : "Sign in"}</h2>
              <p className="text-white/80">{showSecond ? "Create your account to get started with Hirevo." : "Please login to continue to your account."}</p>
            </div>
          </div>
          <AuthForm type={showSecond ? "signup" : "signin"} />
          <div className="mt-4 text-white/80">
            {showSecond ? (
              <>Already have an account? <button onClick={() => setShowSecond(false)} className="text-[#367AFF] font-semibold">Sign in</button></>
            ) : (
              <>Don't have an account? <button onClick={() => setShowSecond(true)} className="text-[#367AFF] font-semibold">Sign up</button></>
            )}
          </div>
          <div className="mt-6">
            <Link to="/" className="inline-block px-4 py-2 bg-white text-[#051139] rounded-lg font-semibold">Go in now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
