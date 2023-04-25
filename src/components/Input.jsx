import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Input = () => {
    return (
        <div className="input">
            <input type='text' placeholder='Type something..' />
            <div className="send">
                <FontAwesomeIcon icon={faPaperclip} style={{ fontSize: '22px', color: 'gray', cursor: 'pointer' }} />
                <input type="file" style={{ display: 'none' }} id='file' />
                <label htmlFor="file">
                    <FontAwesomeIcon icon={faImage} style={{ fontSize: '22px', color: 'grey', cursor: 'pointer' }} />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input