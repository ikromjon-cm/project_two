import "./Header.css"

const Header = () => {
  return (
     <header>
      <div className="header-left">
        <div className="search">
          <span>🔍</span>
          <input className='border' type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">

        <div className="nav-icon">🏠</div>
        <div className="nav-icon">🔔</div>
        <div className="nav-icon">⛶</div>
        <div className="nav-icon">📃</div>
        <div className="weather">☁️ 15°</div>
        <div className="akaunt">
          <div className="img">
          </div>
          <div className="inson">
            <span className="ism">Jhon Galleries</span>
            <span className="admin">
              <select className='select' name="" id="">
              <option value="">admin</option>
              </select>
              </span>
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header