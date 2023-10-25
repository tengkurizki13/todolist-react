
function LoginPage() {
  const divStyle = {
    position: 'fixed',   
    zIndex: 9999,        
    inset: '16px',       
    pointerEvents: 'none'
  };

  const buttonStyle = {
    width: '100%'
  };

  const divNavStyle = {
    fontSize: '2rem',
  };
  return (
    <>
      <header className="header__OVZyn">
        <div className="header_container__EVhPL center__EXlFe">
          <h1 data-cy="header-title" style={divNavStyle}>GetJadwal</h1>
          </div>
      </header>
      <div className="container__90B9A">
        <form className="card__aclyu">
          <h1 data-cy="text-login">Check In</h1>
          <div className="input__HyxCB fullWidth__SF77u">
            <label for="email">Email</label>
            <input id="email" placeholder="Masukkan email anda" className="fullWidth__SF77u" type="email" data-cy="input-email"/>
              </div>
              <button className="btn__tq85o" disabled="" data-cy="btn-login" style={buttonStyle}>Mulai Sesi</button>
        </form>
      </div>
      <div style={divStyle}></div>
    </>
  )
}

export default LoginPage
