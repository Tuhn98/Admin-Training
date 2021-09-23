import React from 'react'
import i18n from '../translation/i18n';
import { useTranslation } from 'react-i18next';
import "../style/RightButton.css";

const Header = ({ setTheme, theme }) => {
    const { t } = useTranslation()

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value)
    }

    const isChangeTheme = (event) => {
        const value = event.target.value
        setTheme(value)
        localStorage.setItem("theme", value)    
    }
 
    return (
        <header className="rightButton">
            <div className="dropdown">
                <select value={localStorage.getItem("lang")} name="Lang" className="dropdown-select" onChange={(e)=>changeLanguage(e)} required>
                    <option value="vi">
                        {t("content.VIETNAMESE")}
                    </option>
                    <option value="en">
                        {t("content.ENGLISH")}
                    </option>
                    <option value="jav">
                        {t("content.JAPANESE")}
                    </option>
                </select>
            </div>
            <div className="dropdown">
                <select value={theme} required name="Theme" className="dropdown-select" onChange={(event) => isChangeTheme(event)}>
                    <option value="light">{t('content.LIGHT')}</option>
                    <option value="dark">{t('content.DARK')}</option>
                    <option value="blue">{t('content.BLUE')}</option>
                </select>
            </div>
        </header>
    )
}

export default Header
