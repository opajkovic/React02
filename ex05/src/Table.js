import React, {Component} from 'react';

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

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Lary</td>
                <td>Page</td>
            </tr>
            <tr>
                <td>Ada</td>
                <td>Lovelace</td>
            </tr>
            <tr>
                <td>Alan</td>
                <td>Turing</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render () {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table;