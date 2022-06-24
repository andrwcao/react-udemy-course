import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JavaScript Framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JavaScript library among Software Engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
];
/*
const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]
*/

export default () => {
    return (
        /*
        <div>
            <Accordion items={items}/>
        </div>

        <div>
        <Search />
        </div>
        */
        /*
        <div>
        <Dropdown 
            selected={selected} 
            setSelected={setSelected} 
            options={options} 
        />
        </div>
        */
        <div>
        <Translate />
        </div>
    );
};