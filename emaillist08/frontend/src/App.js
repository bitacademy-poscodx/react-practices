import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    return (
        <div id={'App'}>
            <RegisterForm />
            <SearchBar />
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;