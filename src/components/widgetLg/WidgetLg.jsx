import './widgetLg.css';

function WidgetLg() {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.filo.news/__export/1601342149930/sites/claro/img/2020/09/28/mafalda_portada_1.jpg_1359985867.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mafalda</span>
                    </td>
                    <td className="widgetLgDate">25 July 2021</td>
                    <td className="widgetLgAmount">$99.99</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.milenio.com/uploads/media/2021/03/22/la-vida-de-homero-simpson.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Simpson Romero</span>
                    </td>
                    <td className="widgetLgDate">25 July 2021</td>
                    <td className="widgetLgAmount">$99.99</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7P4AUyLIRQccNCP4P2wgrYaYkNxc82wgJ77WA-BQm3_qqGnM_PWJFhKKylgudMwKLZQ&usqp=CAU" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Tonton Bouki</span>
                    </td>
                    <td className="widgetLgDate">25 July 2021</td>
                    <td className="widgetLgAmount">$99.99</td>
                    <td className="widgetLgStatus">
                        <Button type="Rejected" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://pbs.twimg.com/profile_images/1285228398005059584/3QhhyeL1_400x400.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ti Malice</span>
                    </td>
                    <td className="widgetLgDate">25 July 2021</td>
                    <td className="widgetLgAmount">$99.99</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
