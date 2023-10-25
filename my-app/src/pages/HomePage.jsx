function HomePage() {
  const divStyle = {
    position: 'fixed',   
    zIndex: 9999,        
    inset: '16px',       
    pointerEvents: 'none'
  };
  const divNavStyle = {
    fontSize: '2rem',
  };

  const inputStyle = {
    color: 'inherit',
    background: '0px center',
    opacity: 1,
    width: '100%',
    gridArea: '1 / 2 / auto / auto',
    font: 'inherit',
    minWidth: '2px',
    border: '0px',
    margin: '0px',
    outline: '0px',
    padding: '0px'
  };
  
  return (
    <>
     <header className="header__OVZyn">
        <div className="header_container__EVhPL center__EXlFe">
          <h1 data-cy="header-title" style={divNavStyle}>GetJadwal</h1>
          <div className="spacer__qkkG9"></div>
          <button className="btn__tq85o" data-cy="btn-logout">Check out | rizki@gmail.com</button>
        </div>
      </header>

      {/* ================= */}

    <div className="container__CCxiH">
      <div className="hstack__fPl8y">
        <div className="spacer__qkkG9"></div>
        <button className="btn__tq85o" data-cy="btn-create-schedule">+ Buat Jadwal Kuliah</button>
      </div>
        <div className="hstack__fPl8y">
          <a className="day__0MayP" href="/schedule/monday">
            <div>
              <div className="card__bOBV7" data-cy="card-day">
                <h3 data-cy="card-title-Senin">Senin </h3>
                <p data-cy="card-desc-Senin" className="">Belum ada mata kuliah</p>
              </div>
              <br/>
            </div>
          </a>
          <a className="day__0MayP" href="/schedule/tuesday">
            <div>
              <div className="card__bOBV7" data-cy="card-day">
                <h3 data-cy="card-title-Selasa">Selasa </h3>
                <p data-cy="card-desc-Selasa" className="">Belum ada mata kuliah</p>
              </div>
              <br/>
            </div>
          </a>
          <a className="day__0MayP" href="/schedule/wednesday">
            <div>
              <div className="card__bOBV7" data-cy="card-day">
                <h3 data-cy="card-title-Rabu">Rabu </h3>
                <p data-cy="card-desc-Rabu" className="">Belum ada mata kuliah</p>
              </div>
                <br/>
            </div>
            </a>
            <a className="day__0MayP" href="/schedule/thursday">
              <div>
                <div className="card__bOBV7" data-cy="card-day">
                  <h3 data-cy="card-title-Kamis">Kamis </h3>
                  <p data-cy="card-desc-Kamis" className="">Belum ada mata kuliah</p>
                </div>
                <br/>
              </div>
            </a>
            <a className="day__0MayP" href="/schedule/friday">
              <div>
                <div className="card__bOBV7" data-cy="card-day">
                  <h3 data-cy="card-title-Jumat">Jumat </h3>
                  <p data-cy="card-desc-Jumat" className="">Belum ada mata kuliah</p>
                </div>
                  <br/>
              </div>
            </a>
          </div>
        </div>

        {/* ==================================================================== */}


              <div className="modal__cKUQp">
                <div className="modal_content__q09Sf">
                  <span data-cy="close-modal" className="close__fK+KL">×</span>
                  <div>
                    <form data-cy="form-add">
                      <h2 className="title p20">Buat Jadwal Kuliah</h2>
                      <div className="p20 gapFlex">
                        <div className="input__HyxCB fullWidth__SF77u">
                          <label>Mata Kuliah</label>
                          <input placeholder="Masukkan mata kuliah" className="fullWidth__SF77u" name="matkul" data-cy="form-matkul" />
                        </div>
                        <div className="input__uzWsy fullWidth__Itihh">
                          <label for="form-day">Pilih Hari</label>
                          <div className=" css-b62m3t-container" id="form-day" data-cy="form-day">
                            <span id="react-select-4-live-region" className="css-7pg0cj-a11yText"></span>
                            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
                            <div className=" css-1s2u09g-control">
                              <div className=" css-1d8n9bt">
                                <div className=" css-14el2xx-placeholder" id="react-select-4-placeholder">Select...</div>
                                <div className=" css-ackcql" data-value="">
                                  <input className="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-4-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-4-placeholder" style={inputStyle} />
                                </div>
                              </div>
                              <div className=" css-1wy0on6">
                                <span className=" css-1okebmr-indicatorSeparator"></span>
                                <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                  <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <input name="form-day" type="hidden" value=""/>
                          </div>
                        </div>
                      </div>
                      <div className="actionContainer p20">
                        <button className="btn__tq85o" disabled="" type="submit" data-cy="btn-submit">Simpan</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        <div style={divStyle}></div>
    </>
  )
}

export default HomePage
