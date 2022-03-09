import React, {useState} from "react";
import Tasks from "../tasks/index";
import Input from "../input";

export default function Content() {

    const [taskInput, setTaskInput] = useState('');
    const [list, setList] = useState([
        { id: 1, name: 'Comprar comida', done: false },
        { id: 2, name: 'Ir à academia', done: true }
    ]);

    function addTask() {

        if (taskInput !== '') {

            const newList = [...list, { id: list.length + 1, name: taskInput, done: false }];
            setList(newList);
            setTaskInput('');

        } else {

            alert('Por favor, insira uma tarefa!');
        }

    }

    function delTask(trashTask) {
        const newList = list.filter(task => task !== trashTask);
        setList(newList);
    }

    function onDone(taskDone) {

        const newList = list.map((task) => {

            if(taskDone.id === task.id) {
                task.done = !task.done;
            }

            return task;
        })

        setList(newList);
    }

    return <>

        <div className="bg-black text-white font-bold p-5 border border-black rounded-b-lg">

            <Input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} onClick={() => addTask()} />

            {list.map((task, index) => {
                return <>

                    <Tasks key={index} value={task.name} done={task.done} onDelete={() => delTask(task)} onDone={() => onDone(task)} />

                </>
            })}

        </div>

    </>

}

