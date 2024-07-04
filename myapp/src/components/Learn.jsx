import {title, language} from '../const';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/Learn.css';


export default function Learn() {
    
    return (
        <>
            <header className="header">
                <Sidebar/>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                
            </header>

            <main>

            </main>

            <Footer />
        </>
    );
}