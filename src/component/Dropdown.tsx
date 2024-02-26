import React, { useEffect, useRef, useState } from 'react'

function Dropdown() {
    const inputSelectRef = useRef<any>(null)
    const [selected, setSelected] = useState<any>([])
    const [selectedItems, setSelectedItems] = useState<any>([])
    const [isShowOptions, setIsShowOptions] = useState(false)
    const data = [
        { id: 1, name: "iphone", tick: false },
        { id: 2, name: "samsung", tick: false },
        { id: 3, name: "nokia", tick: false },
        { id: 4, name: "vivo", tick: false },
        { id: 5, name: "oppo", tick: false },
    ]

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    function handleShowOptions() {
        setIsShowOptions(true)
    }
    function handleClickOutside(e: any) {
        if (inputSelectRef.current && !inputSelectRef.current.contains(e.target)) {
            setIsShowOptions(false)
        }
    }
    function handleSelect({ item }: { item: any }) {
        const arr = [item, ...selected]
        setSelected(arr)
        setSelectedItems([...selectedItems, item.name])
    }
    function handleDelete(item :any) {
        selectedItems.splice(selectedItems.indexOf(item),1)
    }

    return (
        <div>
            <div className='input' ref={inputSelectRef} onClick={handleShowOptions} >
                {
                    selectedItems && selectedItems.map((item: any, id: any) => {
                        return (
                            <div onClick={() => handleDelete(item)}  className='item-input-field'>{item}
                            <span className='cross'>&times;</span>
                            </div>
                        )
                    })
                }
            </div>
            {
                isShowOptions &&
                <div className='items-sheet'>
                    {data.map((item, index) => {
                        return (
                            <div className='item' key={index}
                                onClick={() => handleSelect({ item })}
                            >{item.id}. {item.name}</div>
                        )
                    })}
                </div>

            }

        </div>
    )
}

export default Dropdown