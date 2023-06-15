import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');

:root {
    --primary: #fffff7;
    --secondary: #e9fccf;
    --error: #f96153;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Maven Pro', sans-serif;
    cursor: default;
    user-select: none;
}

body {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    overflow-y: hidden;
    background-color: #273142;
}

.Container {
    width: 100vw;
    height: 100vh;
    max-width: 1280px;
    overflow-y: scroll;
}

h1, h2 {
    font-family: 'Lobster', cursive;
    color: var(--primary);
    letter-spacing: 4px;
}

.home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1, h2 {
        font-size: 2.75rem;
        transition-duration: 900ms;
        &:hover {
            font-size: 3.85rem;
            color: var(--secondary);
        }
    }
    p {
        margin-top: 1rem;
        font-size: 1.3rem;
        color: var(--primary);
        a {
            color: #8dbdeb;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 700px){
        h1, h2 {
            font-size: 3.4rem;
            &:hover {}
        }
    }
    p {
        font-size: 1.5rem;
    }
}

.Page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.sender {
    color: var(--primary);
    background-color: #2d938e;
    width: 80%;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    padding: 9px;
    border: 0;
    border-radius: 6px;
    transition-duration: 900ms;
    &:hover {
        cursor: pointer;
        color: var(--secondary);
        background-color: #09c184;
    }
}

.alert {
    width: 80%;
    height: auto;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    p {
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 4px;
        margin-left: 20px;
        font-size: 1.4rem;
    }
}

.success {
    color: var(--secondary);
    background-color: #09c184;
}

.error {
    color: var(--primary);
    background-color: #fd0a54;
}

.loading {
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        transition-duration: 900ms;
        animation: TextAnimation 1.3s infinite backwards;
        &:hover {
            color: var(--secondary);
        }
    }
    @keyframes TextAnimation {
        0% {
            font-size: 2.9rem;
        } 50% {
            font-size: 3.8rem;
        } 100% {
            font-size: 2.9rem;
        }
    }
}

h3 {
    font-size: 2.4rem;
    @media screen and (max-width: 700px) {
        font-size: 3.2rem;
    }
}

::-webkit-scrollbar {
  width: 10px;
}

`

