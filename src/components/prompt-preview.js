import React, { Component } from 'react';

import '../css/prompt-preview.css';

class PromptPreview extends Component {
    render(){
        return(
            <div className='prompt__container'>
                <h5>Hmm Prompt #122:</h5>
                <h1>Slow is Smooth and Smooth is Nice.</h1>
                {/* <button>Prompts</button> */}
            </div>
        );
    }
}

export default PromptPreview;