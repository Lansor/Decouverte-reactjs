import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Layout from '../layout/layout'
import NoMatch from './NoMatch'

const Routeur = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default Routeur
