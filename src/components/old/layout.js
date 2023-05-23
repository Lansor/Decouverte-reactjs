const Layout = ({children}) => {
    return (
        <>
        <header>
            <p>Je suis un header</p>
        </header>
        <main>
            {children}
        </main>
        <footer>Killian Martins 2023</footer>
        </>
    )
}

export default Layout;