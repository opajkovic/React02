import React, {Component} from "react";

class Table extends Component {
    render () {
        const  {characterData}  = this.props;
        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
            )
        }
        const TableBody = (props) => {
            const rows = props.characterData.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                    </tr>
                );
            });
            return <tbody>{rows}</tbody>

        }
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}


export default Table; 

