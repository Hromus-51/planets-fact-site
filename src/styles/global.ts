import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Reset and base styles  */
* {
    padding: 0px;
    margin: 0px;
    border: none;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

:focus,
:active {
    /*outline: none;*/
}

a:focus,
a:active {
    /* outline: none;*/
}

/* Links */

a,
a:link,
a:visited {
    color: inherit;
    text-decoration: none;
    /* display: inline-block; */
}

a:hover {
    /* color: inherit; */
    /* text-decoration: none; */
}

/* Common */

aside,
nav,
footer,
header,
section,
main {
    display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-size: inherit;
    font-weight: inherit;
}

ul,
ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

img,
svg {
    max-width: 100%;
    height: auto;
}

address {
    font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
    display: none;
}

button,
input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
    outline: none;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

label {
    cursor: pointer;
}

legend {
    display: block;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}
`