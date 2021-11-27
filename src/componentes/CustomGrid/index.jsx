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

    function sortTitle(key) {

        // tive que criar uma property order para de fato o estado mudar e refletir na DOM
        const newData = data.sort(dynamicSort(key)).map(item => {

            return { ...item, order: !item.order } 

        });
        
        setData(newData);
    }


    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }


    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        {
                            select === true ? <th scope="col"><input type="checkbox" onChange={selectAll} ></input></th> : null
                        }
                        {
                            columns.map((c) => {
                                return <th scope="col" style={{cursor: 'pointer'}}  onClick={() => sortTitle(c.key)}  >{c.title}</th>
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