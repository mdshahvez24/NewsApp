import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'
export default function App() {
    let [language, setlanguage] = useState("hi")
    let [pageSize, setpageSize] = useState(8)
    let [search, setsearch] = useState("None")
    const changeLanguage = (data) => {
        setlanguage(data)
    }
    const changePageSize = (data) => {
        data = parseInt(data)
        setpageSize(data)
    }
    const changeSearch = (data) => {
        setsearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar changeSearch={changeSearch} changePageSize={changePageSize} changeLanguage={changeLanguage} />
                <Routes>
                    <Route path='/' element={<News search={search} pageSize={pageSize} language={language} q="All" />}></Route>
                    <Route path='/politics' element={<News search={search} pageSize={pageSize} language={language} q="Politics" />}></Route>
                    <Route path='/sports' element={<News search={search} pageSize={pageSize} language={language} q="Sports" />}></Route>
                    <Route path='/crime' element={<News search={search} pageSize={pageSize} language={language} q="Crime" />}></Route>
                    <Route path='/education' element={<News search={search} pageSize={pageSize} language={language} q="Education" />}></Route>
                    <Route path='/technology' element={<News search={search} pageSize={pageSize} language={language} q="Technology" />}></Route>
                    <Route path='/science' element={<News search={search} pageSize={pageSize} language={language} q="Science" />}></Route>
                    <Route path='/jokes' element={<News search={search} pageSize={pageSize} language={language} q="Jokes" />}></Route>
                    <Route path='/entertainment' element={<News search={search} pageSize={pageSize} language={language} q="Entertainment" />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
