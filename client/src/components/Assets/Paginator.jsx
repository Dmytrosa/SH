import React, { useEffect, useState } from "react";
import q from "../Profile/Heroes/Heroes.module.css"
import bb from "./Blackbutton.module.css"
const Paginator = (props) => {
    // console.log("PAGINATOR RENDER")
    // console.log("PAGINATOR",props)
    const [portionNumber, setPortionNumber] = useState(1)
    const pagesCount = Math.ceil(props.totalHeroesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let currentPortion = Math.ceil(props.currentPage / props.pageSize);
    let portionCount = Math.ceil(pagesCount / props.pagePortion);
    let rightPortionPageNumber = props.pagePortion * portionNumber + 1
    let leftPortionPageNumber = ((portionNumber - 1) * props.pagePortion);

    useEffect(() => { setPortionNumber(currentPortion) }, [])
    return (
        <div className={q.paginatorBox}>
            {portionNumber > 1 && <button className={bb.Bbutton} onClick={() => { setPortionNumber(portionNumber - 1) }}>{`<=`}</button>}
            {pages
                .filter(p => p < rightPortionPageNumber && p > leftPortionPageNumber)
                .map(p => {
                    return <span key={p} className={props.currentPage === p? bb.Abutton : bb.Bbutton}
                        onClick={() => {
                            props.onPageChanged(p);
                        }} >{p}</span>
                })}
            {portionCount > portionNumber && <button className={bb.Bbutton} onClick={() => { setPortionNumber(portionNumber + 1) }}>{`=>`}</button>
            }
        </div>
    )
}

export default Paginator;