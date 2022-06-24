import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [ translatedText, setTranslatedText ] = useState('');
    useEffect(() => {
        const timerId = setTimeout(() => {
            axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            }).then(({data}) => {
                setTranslatedText(data.data.translations[0].translatedText);
            });
        }, 500);

        return (() => {
            clearTimeout(timerId);
        });
        
    }, [language, text]);

    return (
        <h1 className="ui header">{translatedText}</h1>
    );
};

export default Convert;