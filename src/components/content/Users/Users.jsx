import React from "react";
import s from "./Users.module.css";
import User from "./User/User";
import Preloader from "../../common/Preolader/Preloader";

const Users = props => {
    let pagesCount = Math.ceil(props.usersTotalCount / props.usersCount);
    if (pagesCount > 20) {
        pagesCount = 20;
    }

    let paginationElements = [];
    for (let p = 1; p <= pagesCount; p++) {
        if (p === props.currentPage) {
            paginationElements.push(<button className={s.paginationButton + ' ' + s.current} onClick={() => { props.onSetCurrentPage(p) } }>{p}</button>);
        }
        else {
            paginationElements.push(<button className={s.paginationButton} onClick={() => { props.onSetCurrentPage(p) } }>{p}</button>);
        }
    }

    let usersElements = props.users.map(u => <User key={u.id} name={u.name} photo={u.photos.small} followed={u.followed}/>);

    return <div className={s.usersContent}>
        {props.isFetching ? <Preloader/> : (<>
                <div className={s.paginationList}>{paginationElements}</div>
                <div className={s.usersList}>{usersElements}</div>
            </>
        )}
    </div>
}

export default Users;