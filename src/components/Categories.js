import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'всё',
                },
                {
                    key: 'oil',
                    name: 'Работы Мастеров',
                },
                {
                    key: 'style',
                    name: 'Талисманы',
                },
                {
                    key: 'shik',
                    name: 'Великолепие линий',
                },
                {
                    key: 'stons',
                    name: 'Камни в металле',
                }

            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div rte={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name} </div>
                ))}
            </div>
        )
    }
}

export default Categories