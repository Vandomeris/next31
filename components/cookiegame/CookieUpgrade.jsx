import React from 'react'

export default function CookieUpgrade({ text, cost, upgradeAmount }) {

    return (
        <button title={`Повышает количество печенек за клик на ${upgradeAmount}`} className='border p-3 '>
            <img src="" alt="" />
            <p>{text}</p>
            <p>({cost})</p>
        </button>
    )
}
