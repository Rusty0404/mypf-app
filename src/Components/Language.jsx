import React from 'react';

const Language = () => {

    return(
        <div className="LanguageFlag">
            <ul>
            <li onClick={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=ja&u=https://webdeveloper-kazu.web.app';}}><i className="flag-icon flag-icon-jp flag-icon-squared"></i>Japanese</li>
            <li onClick={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=en&u=https://webdeveloper-kazu.web.app';}}>English</li>
            <li onClic={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=it&u=https://webdeveloper-kazu.web.app';}}><i className="flag-icon flag-icon-it flag-icon-squared"></i>Italy</li>
            <li onClick={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=fr&u=https://webdeveloper-kazu.web.app';}}><i className="flag-icon flag-icon-fr flag-icon-squared"></i>French</li>
            <li onClick={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=zh-TW&u=https://webdeveloper-kazu.web.app';}}><i className="flag-icon flag-icon-cn flag-icon-squared"></i>Chinese</li>
            <li onClick={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=ko&u=https://webdeveloper-kazu.web.app';}}><i className="flag-icon flag-icon-kr flag-icon-squared"></i>Korea</li>
            <li onClick={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=es&u=https://webdeveloper-kazu.web.app';} }><i className="flag-icon flag-icon-es flag-icon-squared"></i>Spain</li>
            <li onClick={(e) => {e.preventDefault(); window.location.href='https://translate.google.com/translate?sl=ja&tl=de&u=https://webdeveloper-kazu.web.app';}}><i className="flag-icon flag-icon-de flag-icon-squared"></i>Germany</li>
            </ul>
            
        </div>
    )
}

export default Language;