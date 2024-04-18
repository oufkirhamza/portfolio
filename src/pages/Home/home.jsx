import "./components/firstSection.sass"
import { useEffect, useState } from 'react';
import { About } from './components/about';
import { Contact } from './components/contact';
import { FirstSection } from './components/firstSection';
import { Projects } from './components/project';
import { Hourglass } from 'react-loader-spinner';

export const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Show spinner when component mounts
        setLoading(true);

        // Hide spinner when component unmounts
        // return () => setLoading(false);
        // Hide spinner when the page finishes loading
        window.addEventListener('load', () => {
            setLoading(false);
        });

        // Cleanup event listener
        return () => {
            window.removeEventListener('load', () => {
                setLoading(false);
            });
        };
    }, []);
    // const hidespinner = () => {
    //     setLoading(false)
    // }

    // window.addEventListener('load', showSpinner);
    // window.addEventListener('DOMContentLoaded', () => {
    // const spinnerContainer = document.getElementById('spinner-container');
    // if (spinnerContainer) {
    //     render(null, spinnerContainer);
    // }
    //     setLoading(false)
    // });

    return (
        <>
            {loading && (
                <Hourglass
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass="spin"
                    colors={['#5e330d', '#a7540c']}
                />
            )}
            <div className={loading ? "hidden" : 'block'}>
                <FirstSection />
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    );
}
