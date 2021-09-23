import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import "../style/Searchbox.css";

const SearchBox = ({ setsearchText }) => {
    const { t } = useTranslation()
    const [text, settext] = useState("")

    const isChangeText = (event) => {
        const value = event.target.value
        settext(value)
    }

    const searchBtn = (dl) => {
        setsearchText(dl)
        settext("")
    }

    return (
        <div className="container-4">
            <input value={text} onChange={(event) => isChangeText(event)} type="search" id="search" placeholder={`${t("content.SEARCH")}...`} />
            <button onClick={(dl) => searchBtn(text)} className="icon"><i className="fa fa-search" /></button>
        </div>
    )
}

export default SearchBox
