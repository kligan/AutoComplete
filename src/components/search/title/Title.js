import {TitleContent} from '../Data';
import './Title.css';

function Title () {
    return(
        <>
            <div className="title">
                <h2>{TitleContent.title}</h2>
            </div>
        </>
    )
}

export default Title;