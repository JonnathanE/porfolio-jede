import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import CV from '../../docs/cv-software.pdf';

const Viewcv = () => {

    useEffect(() => {
        if (typeof window.orientation !== "undefined") {
            document.getElementById("btnDownloadCV").click();
            window.close();
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>View CV | Portfolio - Jonnathan Espinoza</title>
            </Helmet>
            <div className='absolute w-screen h-screen'>
                <object data={CV} type='application/pdf' width='100%' height='100%'>
                    <div className='p-6'>
                        <h2 className='mt-4 mb-4'>Your device cannot view the PDFs, click here to download</h2>
                        <a href={CV} download='CV-Jonnathan-Espinoza.pdf' id='btnDownloadCV' className='btn btn-purple hover:bg-bookmark-white hover:text-black'>
                            Download CV
                        </a>
                    </div>
                </object>
            </div>
        </>
    );
}

export default Viewcv;
