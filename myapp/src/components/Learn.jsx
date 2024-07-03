import {title, language} from '../const';
import Footer from './Footer';
import '../styles/Learn.css';
import Sidebar from './Sidebar';


export default function Learn() {
    
    return(
        <>
            <Sidebar/>

            <header>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                
            </header>

            <main>

            </main>
            <Footer />
        </>
    )
}