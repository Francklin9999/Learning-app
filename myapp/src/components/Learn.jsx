import {title, language} from '../const';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/Learn.css';


export default function Learn() {
    
    return (
        <>
            <header className="header2">
                <Sidebar/>
                <div className="title2">
                    <h1>{title}</h1>
                </div>
                
            </header>

            <main>

            </main>

            <Footer />
        </>
    );
}