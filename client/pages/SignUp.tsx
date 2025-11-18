import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div style={{width: 1440, minHeight: 720, background: '#051139', overflow: 'hidden', borderRadius: 32, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
      <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
            <div style={{color: '#F0F0F0', fontSize: 40, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, wordWrap: 'break-word', textShadow: '0px 0px 0px rgba(0, 0, 0, 0.25)'}}>HIREVO</div>
            <img style={{width: 64, height: 64, borderRadius: 8}} src="https://placehold.co/91x91" alt="logo" />
          </div>
        </div>

        <div style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 24, paddingRight: 24, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
          <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
            <div style={{textAlign: 'left', color: 'white', fontSize: 40, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700, lineHeight: '44px', wordWrap: 'break-word'}}>Create account</div>
            <div style={{alignSelf: 'stretch', color: 'white', fontSize: 18, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word'}}>Create your account to get started with Hirevo.</div>
          </div>

          <form style={{display: 'flex', flexDirection: 'column', gap: 20}} onSubmit={(e) => { e.preventDefault(); alert('Sign up submitted'); }}>
            <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{color: 'white', fontSize: 14}}>Full name</span>
              <input type="text" placeholder="Full name" style={{width: 399, padding: 12, borderRadius: 10, border: '1px solid #D9D9D9', background: 'transparent', color: 'white'}} />
            </label>

            <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{color: 'white', fontSize: 14}}>Email</span>
              <input type="email" placeholder="you@example.com" style={{width: 399, padding: 12, borderRadius: 10, border: '1px solid #D9D9D9', background: 'transparent', color: 'white'}} />
            </label>

            <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{color: '#9A9A9A', fontSize: 14}}>Password</span>
              <input type="password" placeholder="Create a password" style={{width: 399, padding: 12, borderRadius: 10, border: '1px solid #D9D9D9', background: 'transparent', color: 'white'}} />
            </label>

            <button type="submit" style={{width: 200, padding: 12, borderRadius: 10, background: '#34A853', color: 'white', fontWeight: 700}}>Create account</button>

            <div style={{color: 'white'}}>
              Already have an account? <Link to="/signin" style={{color: '#367AFF'}}>Sign in</Link>
            </div>
            <div>
              <Link to="/" style={{display: 'inline-block', marginTop: 8, padding: 10, background: '#FFFFFF', color: '#051139', borderRadius: 8, fontWeight: 700}}>Go in now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
