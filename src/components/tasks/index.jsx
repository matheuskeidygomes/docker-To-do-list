import React from "react";
import { Trash, Done } from '../icons/index';

export default function Tasks(props) {

    const doneText = props.done ? 'line-through' : '';
    const doneIcon = props.done ? 'text-lime-700' : '';

    return <>

        <div className="flex justify-between transition  hover:scale-105 text-white font-bold p-3 ml-3 mr-3 mb-3 border-2 border-lime-600 rounded-lg">

            <h1 className={`${doneText}`}>{props.value}</h1>

            <div className="flex justify-center items-center">
                <div className={`mr-3 hover:cursor-pointer ${doneIcon} hover:text-lime-700`} onClick={props.onDone}>{Done}</div>
                <div className="hover:cursor-pointer hover:text-lime-700" onClick={props.onDelete}>{Trash}</div>
            </div>

        </div>


    </>

}

