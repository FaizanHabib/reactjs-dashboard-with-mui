import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWdetE43p3-wii1YN1uENxphdxso765GtPwJrMz2GW38q_GZFUvfV2uwXhVIxo-SfX-0&usqp=CAU" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jenny Augustin</span>
                        <span className="widgetSmUserTitle">Chemical Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://pbs.twimg.com/profile_images/1023301085723873281/SyPRBzNC_400x400.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Maxonley Petit</span>
                        <span className="widgetSmUserTitle">IT Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://media-exp3.licdn.com/dms/image/C5603AQFjif5norG1WQ/profile-displayphoto-shrink_200_200/0/1589808961291?e=1630540800&v=beta&t=yt5dTkhH8RYaMrRsnW8xT6N_BOQ7NFB6HgcmMU6r4ow" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Angie ST Fleur</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://pbs.twimg.com/profile_images/378800000086147679/7343fc3ce9cc1ccdd1b4e3a78782cc31.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jonas Colas</span>
                        <span className="widgetSmUserTitle">Fullstack Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT88TuSfOatif3aR1tEefHY9Owe8xuts4cw_xLdXjnvltZWQDwHn3teM6bdfg9yjk4kl4&usqp=CAU" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Wadly Dugue</span>
                        <span className="widgetSmUserTitle">Frontend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm;
