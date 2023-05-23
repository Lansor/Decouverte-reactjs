import logo from '../../image.png'



const Layout = ({ children }) => {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Pour modifier la page c&#39;est ici :<code>src/App.js</code>.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
            <main className='App-main'>
                {children}
            </main>
            
        <footer>Killian Martins 2023</footer>
        </div>
    )
}

export default Layout
