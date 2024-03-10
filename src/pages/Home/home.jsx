
import { About } from './components/about';
import { Contact } from './components/contact';
import { FirstSection } from './components/firstSection';
import { Projects } from './components/project';

export const HomePage = () => {
    
    return (
        <>
            <FirstSection/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
}
