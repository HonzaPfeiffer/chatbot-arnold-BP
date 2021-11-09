import React from 'react'
import { WebchatContext, customMessage } from '@botonic/react'
import styled from 'styled-components'

class LessonsList extends React.Component {
    static contextType = WebchatContext
    constructor(props) {
        super(props)

        this.state = {
            lessons: props.data.lessons,
        }
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.state.lessons.map(row => (
                        <tr key={row.id}>
                            <td component="th" scope="row">
                                {row.lesson}
                            </td>
                            <td align="right">{`${row.day} ${row.when}`}</td>
                            <td align="right">{`${row.occupied}/${row.capacity}`}</td>
                        </tr>
                    ))}
                </tbody>              
            </table>
        )
    }
}

export default customMessage({
    name: 'lessons-list',
    component: LessonsList,
    defaultProps: {
        style: {
            width: '100%',
            backgroundColor: '#ffffff',
            border: 'none',
            boxShadow: 'none',
            paddingLeft: '5px',
        },
        imageStyle: { display: 'none' },
        blob: false,
        enableTimestamps: false,
    },
})
