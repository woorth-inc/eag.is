import React from 'react'
import ReactDOM from 'react-dom'

import icon from './assets/images/eagis-icon-700.png'

const App = () => (
  <>
    <header>
        <div className="wrapper-icon">
            <a href="#">
                <img id="top-icon" src={icon} alt="eagis icon" />
                {/* <EagisIcon /> */}
            </a>
        </div>
        <div className="wrapper-list">
            <ul id="header-list">
                <li id="company">
                    <a href="!">company</a>
                </li>
                <li id="member">
                    <a href="!">member</a>
                </li>
                <li id="about">
                    <a href="!">about</a>
                </li>
                <li id="twitter">
                    <a href="!">twitter</a>
                </li>
                <li id="discord">
                    <a href="!">discord</a>
                </li>
            </ul>
        </div>
    </header>
  </>
)

ReactDOM.render(<App />, document.getElementById('app'))
