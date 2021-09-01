import React, { useState } from 'react'
import './styles.css'

function CustomGrid({ columns, rows, select, buttons, events }) {

    //table-striped
    const [data, setData] = useState(rows)


    function handleSelect(id) {

        const newData = data.map(item => {

            return item.id === id ? { ...item, checked: !item.checked } : item

        });

        setData(newData);
    }

    function selectAll() {
        const newData = data.map(item => {
            return { ...item, checked: !item.checked };
        });
        setData(newData);
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        {
                            select === true ? <th scope="col"><input type="checkbox" onChange={selectAll}></input></th> : null
                        }
                        {
                            columns.map((c) => {
                                return <th scope="col">{c.title}</th>
                            })
                        }
                        {
                            buttons?.map(b => {
                                return <th scope="col">{<p></p>}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((r) => {
                            return (
                                <tr key={r.id.toString()} style={r.checked ? { backgroundColor: "#fff3cd" } : null}  >
                                    {
                                        select === true ? <td>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleSelect(r.id)}>
                                            </input>
                                        </td> : null
                                    }
                                    {
                                        columns.map(c => {
                                            return <td>{r[c.key]}</td>
                                        })
                                    }
                                    {
                                        buttons?.map((b, index) => {
                                            return <td>{<button 
                                                            onClick={() => events[index](r)}
                                                            style={{borderRadius: 3,  display: 'inline-block', backgroundColor: '#0b5ed7', color: '#fff'}}    
                                                            > {b} </button>}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )


}

export default CustomGrid